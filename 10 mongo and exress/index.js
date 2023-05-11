const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5500;

const server = express();
server.use(cors());
server.use(express.json());

server.use('/api/characters', require('./routes/characterRoute'));



server.listen(PORT, () => console.log(`http://localhost:${PORT}`));