'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const random = require('random');

const randomize = express();
randomize.use(bodyParser.json());
randomize.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();

const get = router.get('/', (req, res, next) =>{
    res.send("Em breve gerando itens!");
});

randomize.use('/', get);

module.exports = randomize;