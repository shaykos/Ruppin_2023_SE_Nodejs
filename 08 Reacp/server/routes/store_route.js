//ייבוא ספריות
const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
const { Read, Create, AddItem } = require('../utils/functions');

//Route יצירת 
const StoreRoute = require('express').Router();

//ראוט לשליפת כל החנויות והמוצרים שלהן
StoreRoute.get('/', async (req, res) => {
  try {
    let stores = await Read();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//ראוט לשליפת חנות ספציפית
StoreRoute.get('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let stores = await Read(id);
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error });
  }

});


//ראוט לשליפת מוצר מחנות ספציפית
StoreRoute.get('/:storeId/:productId', async (req, res) => {
  try {
    let { storeId, productId } = req.params;
    let data = await Read(storeId);

    if (data.store) {
      let product = data.store.items.find((item) => item.id == productId);
      if (product)
        res.status(200).json({ product, msg: 'ok' });
      else
        res.status(200).json({ product: {}, msg: 'product not found' });
    }
    else
      res.status(200).json({ store: {}, msg: 'store not found' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

//ראוט ליצירת חנות
StoreRoute.post('/add', async (req, res) => {
  try {
    let { name, city } = req.body;
    let store = { id: uuidv4(), name, city, items: [] };
    let data = await Create(store);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//ראוט להוספת מוצר לחנות
StoreRoute.post('/:storeId/items/add', async (req, res) => {
  try {
    let {storeId} = req.params;
    let { name, regular_price, sale_price } = req.body;

    let item = { id: uuidv4(), name, regular_price, sale_price };
    let data = await AddItem(storeId, item);
    res.status(201).json(data);

  } catch (error) {
    res.status(500).json({ error });
  }
});

//ייצוא 
module.exports = StoreRoute;