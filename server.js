const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.post("/api/accounts", (req, res) => {
    db('accounts').insert(req.body)
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json({errMsg: "error adding account"}))
  })
  
  server.get("/api/accounts", (req, res) => {
    db('accounts')
      .then(users => res.status(400).json(users))
      .catch(err => res.status(500).json({errMsg: "error getting accounts"}))
  })
  
  server.get("/api/accounts/:id", (req, res) => {
    const {id} = req.params
    db('accounts').where({id})
      .then(user => {
        if (user.length) {
          res.status(400).json(user)
        } 
        res.status(404).json({errMsg: "account not found"})
      })
      .catch(err => res.status(500).json({errMsg: "error getting account"}))
  })
  
  server.put("/api/accounts/:id", (req, res) => {
    const {id} = req.params
    db('accounts').where({id}).update(req.body)
      .then(num => res.status(400).json(num))
      .catch(err => res.status(500).json({errMsg: "error updating account"}))
  })
  
  server.delete("/api/accounts/:id", (req, res) => {
    const {id} = req.params
    db('accounts').where({id}).del()
      .then(num => res.status(400).json(num))
      .catch(err => res.status(500).json({errMsg: "error deleting account"}))
  })
  
  module.exports = server;

module.exports = server;