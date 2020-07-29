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
routes.get('/items/player/:player_id', ItemController.index);
routes.get('/items/:item_id', ItemController.show);
routes.post('/items/add/:player_id', ItemController.store);
routes.delete('/items/:item_id', ItemController.destroy);

// Generation routes
routes.get('/generate', GenerationController.generate);
routes.post('/generate', GenerationController.generate);

module.exports = routes;