//.env הפעלת ה 
require('dotenv').config();

//ייבוא ספריות
const express = require('express');
const path = require('node:path');
const DB = require('./utils/dbConfig');

//מציאת פורט
const PORT = process.env.PORT;

//יצירת השרת
const server = express();
server.use(express.json());

/*
  TODO: add routes
*/

server.use('/api/heros', require('./routes/heros'));

//הפעלת השרת
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
