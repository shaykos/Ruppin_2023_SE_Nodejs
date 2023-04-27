const { writeFile, readFile} = require('node:fs/promises');
const path = require('node:path');


async function Create(store) {
  try {
    let { stores } = await Read();
    stores.push(store);
    await writeFile(path.join(__dirname, '../db', 'stores.json'), JSON.stringify(stores));
    return { store, msg: 'store created' };
  } catch (error) {
    console.error(error);
  }
}

async function AddItem(storeId, item) {
  try {
    let { stores } = await Read();
    let created = false;
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].id == storeId) {
        stores[i].items.push(item);
        created = true;
      }
    }
    if (created)
      await writeFile(path.join(__dirname, '../db', 'stores.json'), JSON.stringify(stores));
    return { item, msg: created ? 'item added' : 'we found a problem' };

  } catch (error) {
    console.error(error);
  }
}

async function Read(id = 0) {
  try {
    let data = await readFile(path.join(__dirname, '../db', `stores.json`));
    data = JSON.parse(data.toString());
    if (id == 0)
      return { stores: data, msg: `stores found` };

    return { stores: data.find((item) => item.id == id), msg: '' };

  } catch (error) {
    console.error(error);
  }
}


module.exports = { Create, Read, AddItem }