//.env הפעלת ה 
require('dotenv').config();

//ייבוא ספריות
const express = require('express');
const path = require('node:path');
const DB = require('./models/db');

//מציאת פורט
const PORT = process.env.PORT;

//יצירת השרת
const server = express();
server.use(express.json());

/*
  TODO: add routes
*/

server.get('/', async (req, res) => {
  try {
    let heros = await DB.Select('select * from heros');
    res.status(200).json(heros);
  } catch (error) {
    res.status(500).json(error);

  }

});

//הפעלת השרת
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
