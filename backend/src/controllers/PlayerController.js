const Player = require('../models/Player');
const Propertie = require('../models/Propertie');
const Item = require('../models/Item');

module.exports = {
    async index(req, res) {

        const {player_id} = req.params;
        
        if(player_id){
            console.log(`Receiving request for player ${player_id}`);
            return await Player.findByPk(player_id);
        }

        const players = await Player.findAll();

        return res.json(players);
    },
    

    async store(req, res) {
        const { name, level } = req.body;

        const player = await Player.create({ name, level });

        return res.json(player);
    },
    
    async addItem(req, res) {
        const { player_id } = req.params;
        const { item_props } = req.body;

        const player = Player.findByPk(player_id);

        if(!player){
            res.json({ message: "Player not found!" }).status(404).send();
        }
        
        const item = await Item.create({ 
            owner_id: player_id,
            type: item_props.type,
            subtype: item_props.subtype,
            quality: item_props.quality,
            name: item_props.name, 
            level: item_props.level,
            atk: item_props.def,
            def: item_props.def,
        });

        const prop = await Propertie.findByPk(item_props.prop_id);
        
        await item.addPropertie(prop);

        return res.json(item);
    },

    async removeItem(req, res) {
        const { item_id } = req.params;
        res.redirect(`../../item/${item_id}`);
    }
};