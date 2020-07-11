const Randomize = require('../apps/randomize');
const random = require('random');

module.exports = {
    async generate(req, res) {
        const { 
            excluded_types, 
            excluded_subtypes, 
            excluded_qualitys,
            min_lvl, max_lvl,
        } = req.body;
        
        const type = await Randomize.type(excluded_types);
        const subtype = await Randomize.subtype(type, excluded_subtypes);
        const quality = await Randomize.quality(excluded_qualitys);
        const name = await Randomize.name(type, subtype);

        let level;
        do{
            level = random.int(1, 10) * quality;
        } while(min_lvl > level || level > max_lvl);

        let atk = 0;
        let def = 0;
        if(type == "Weapon"){
            atk = level + (random.int(1, 11) * quality);
        } else if(type == "Armor"){
            def = level + (random.int(1, 9) * quality)
        }

        if(quality != 1)
            var prop_id = await Randomize.props(quality);
        
        const item = {
            type,
            subtype,
            quality,
            name,
            level,
            atk,
            def,
            prop_id
        }

        return res.json(item);
    }
};
