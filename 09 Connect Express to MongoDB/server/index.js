//imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//set the port
const PORT = process.env.PORT || 8000;

//create the server
const server = express();
server.use(express.json());
server.use(cors());

//routes
server.get('/', async (req, res)=>{
    res.send('hiiii');
});

server.use('/api/characters', require('./routes/character'));

server.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));
