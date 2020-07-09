const Item = require('../models/Item');
const Propertie = require('../models/Propertie');
const Rand = require('../util/RNG');
const Randomize = require('../apps/randomize');
const random = require('random');

module.exports = {
    async generate(req, res) {
        
        let item = new Item();
        item.type = await Randomize.type();
        item.subtype = await Randomize.subtype(item.type);
        item.quality = await Randomize.quality(["Common", "Unique"]);
        item.name = await Randomize.name(item);
        item.level = random.int(1, 10) * item.quality;

        if(item.type == "Weapon"){
            item.atk = item.level + (random.int(1, 13) + item.quality);
            item.def = 0;
        } else if(item.type == "Armor"){
            item.atk = 0;
            item.def = item.level + (random.int(1, 9) + item.quality)
        }
        
        
        return res.json(item);
    }
};
