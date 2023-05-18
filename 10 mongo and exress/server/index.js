require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5500;

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, '../client', 'dist')));

server.use('/api/characters', require('./routes/characterRoute'));

server.get('/*', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));