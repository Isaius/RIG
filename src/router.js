'use strict'

const express = require('express');
const randomize = require('./apps/randomize');

const app = express();

app.use('/random', randomize);
 
module.exports = app;