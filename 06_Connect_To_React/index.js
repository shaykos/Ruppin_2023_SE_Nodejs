//ייבוא חבילות
const express = require('express');
const path = require('node:path');
const cors = require('cors');

//יצירת פורט
const PORT = process.env.PORT || 5008;

//יצירת השרת
const server = express();
server.use(express.json());
server.use(cors());

//הגדרת קבצים סטטיים
server.use(express.static(path.join(__dirname, 'dist')));

//יצירת נתיבים
server.use('/api/users', require('./Routes/users'));

//חיבור הריאקט לשרת
server.get('/*', async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, 'dist', 'index.html'));
  } catch (error) {
    res.status(500).json({error});
  }
});

//הפעלת השרת
server.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));

