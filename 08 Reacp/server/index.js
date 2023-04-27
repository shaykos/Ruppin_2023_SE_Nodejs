//ייבוא ספריות
const express = require('express');
const cors = require('cors');

//הגדרת פורט
const PORT = process.env.PORT || 5500;

//יצירת השרת
const server = express();
server.use(cors());
server.use(express.json());

//Routes כתיבת 
server.get('/', async (req, res) => {
  res.send('hi');
});

server.use('/api/store', require('./routes/store_route'));

//הפעלת השרת
server.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));