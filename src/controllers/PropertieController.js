const Propertie = require('../models/Propertie');

module.exports = {
    async index(req, res) {
        const props = await Propertie.findAll();

        return res.json(props);
    },

    async store(req, res) {
        const { name, description, rarity } = req.body;

        const prop = await Propertie.create({ name, description, rarity });

        return res.json(prop);
    }
};