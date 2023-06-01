require('dotenv').config();
const express = require('express');
const PORT = 5500;

const server = express();
server.use(express.json());


server.use('/api/users', require('./routes/users.route'));
server.use('/api/posts', require('./routes/posts.route'));


server.listen(PORT, () => console.log(`http://localhost:${PORT}`));



