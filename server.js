const express = require('express');
const router = require('./accounts/accountsRouter')
const server = express();

server.use(express.json());
server.use('/api/accounts', router)
server.get('/', (req, res) => {
    res.send('Webdb API')
})



module.exports = server;