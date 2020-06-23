const Item = require('../models/Item');
const Player = require('../models/Player');
const Propertie = require('../models/Propertie');

module.exports = {
    async index(req, res) {
        const items = await Item.findAll();

        return res.json(items);
    },

    async store(req, res) {
        const { player_id, prop_id } = req.params;
        const { type, subtype, quality, name, level, atk, def } = req.body;

        const player = await Player.findByPk(player_id);
        const prop1 = await Propertie.findByPk(prop_id);

        if(!player || !prop1) {
            return res.status(400).json({ error: 'Invalid ID for player or propertie' });
        }
        const owner_id = player_id;
        const prop = prop_id;
        const item = await Item.create({ 
            owner_id,
            type,
            subtype,
            quality,
            name, 
            level,
            atk,
            def,
            prop,
        });

        return res.json(item);
    }
};