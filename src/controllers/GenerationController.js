const Item = require('../models/Item');
const Propertie = require('../models/Propertie');
const Rand = require('../util/RNG');
const Randomize = require('../apps/randomize');

module.exports = {
    async generate(req, res) {
        const { 
            type, subtype, min_quality,
            max_quality, min_level, max_level, 
            min_atk, max_atk, min_def, max_def,
        } = req.body;

        const quality = Rand.integer(min_quality, max_quality);
        const level = Rand.integer(min_level, max_level);
        const atk = Rand.integer(min_atk, max_atk);
        const def = Rand.integer(min_def, max_def);
        const props_quantity = Rand.integer();

        let result = await Randomize.type();
        result = await Randomize.subtype(result);
        result = await Randomize.quality(["Common", "Unique"]);

        return res.json(result);
    }
};
