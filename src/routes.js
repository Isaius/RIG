'use strict'

const express = require('express');

const PropertieController = require('./controllers/PropertieController');
const PlayerController = require('./controllers/PlayerController');
const ItemController = require('./controllers/ItemController');
const GenerationController = require('./controllers/GenerationController');

const routes = express.Router();

routes.get('/properties', PropertieController.index);
routes.post('/properties', PropertieController.store);

routes.get('/player', PlayerController.index);
routes.post('/player', PlayerController.store);

routes.get('/player/:player_id/item', ItemController.index);
routes.post('/player/:player_id/item', ItemController.store);

routes.get('/generate', GenerationController.generate);
 
module.exports = routes;