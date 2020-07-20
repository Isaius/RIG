'use strict'

const express = require('express');

const PropertieController = require('./controllers/PropertieController');
const PlayerController = require('./controllers/PlayerController');
const ItemController = require('./controllers/ItemController');
const GenerationController = require('./controllers/GenerationController');

const routes = express.Router();
// Properties routes
routes.get('/properties', PropertieController.index);
routes.post('/properties', PropertieController.store);

// Player routes
routes.get('/player/:player_id', PlayerController.index);
routes.post('/player', PlayerController.store);
routes.post('/player/:player_id', PlayerController.addItem);
routes.delete('/player/inventory/:item_id', PlayerController.removeItem);

// Item routes
routes.get('/player/:player_id/item', ItemController.index);
routes.post('/player/:player_id/item', ItemController.store);
routes.delete('/item/:item_id', ItemController.destroy);

// Generation routes
routes.get('/generate', GenerationController.generate);
routes.post('/generate', GenerationController.generate);

module.exports = routes;