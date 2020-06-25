const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Propertie = require('../models/Propertie');
const Item = require('../models/Item');
const Player = require('../models/Player');

const connection = new Sequelize(dbConfig);

Propertie.init(connection);
Item.init(connection);
Player.init(connection);

Item.associate(connection.models);
Player.associate(connection.models);

module.exports = connection;