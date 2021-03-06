const Item = require('../models/Item');
const Player = require('../models/Player');

module.exports = {
    async index(req, res) {

        const { player_id } = req.params;

        const player = await Player.findByPk(player_id, {
            include: { association: 'items' }
        });

        return res.json(player.items);
    },

    async show(req, res) {
        const { item_id } = req.params;

        const item = await Item.findByPk(item_id);

        return res.json(item);
    },

    async store(req, res) {
        const { player_id } = req.params;
        const { type, subtype, quality, name, level, atk, def } = req.body;

        const player = await Player.findByPk(player_id);

        if(!player) {
            return res.status(400).json({ error: 'Invalid ID for player' });
        }

        const owner_id = player_id;
        const item = await Item.create({ 
            owner_id,
            type,
            subtype,
            quality,
            name, 
            level,
            atk,
            def,
        });

        return res.json(item);
    },

    async destroy(req, res) {
        const { item_id } = req.params;
        const item = await Item.findByPk(item_id);
        return res.json(await item.destroy());
    }
};