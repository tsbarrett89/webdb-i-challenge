const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
    db.select("*").from("accounts")
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => res.status(500).json({errorMessage:"error getting accounts"}))
})

router.get('/:id', (req, res) => {
    db.select('*').from('accounts').where({ id: req.params.id })
    .then(accounts => {
        res.status(200).json(accounts);
    })
    .catch(err => res.status(500).json({errorMessage:"error getting accounts"}))
})

router.post('/', (req, res) => {
    const accountData = req.body;

    db('accounts').insert(accountData, 'id') 
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => res.status(500).json({errorMessage:"error getting accounts"}))
})

router.put('/:id', (req, res) => {
    const accountData = req.body;

    db('accounts').update(accountData, 'id').where({ id: req.params.id })
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => res.status(500).json({errorMessage:"error getting accounts"}))
})

router.delete('/:id', (req, res) => {
    db('accounts').delete().where({ id: req.params.id })
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => res.status(500).json({errorMessage:"error getting accounts"}))
})

module.exports = router