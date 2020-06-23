const Player = require('../models/Player');

module.exports = {
    async index(req, res) {
        const players = await Player.findAll();

        return res.json(players);
    },

    async store(req, res) {
        const { name, level } = req.body;

        const player = await Player.create({ name, level });

        return res.json(player);
    }
};