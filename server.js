const express = require('express');
const router = require('./accounts/accountsRouter')
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Webdb API')
})

server.use('api/accounts', router)

module.exports = server;