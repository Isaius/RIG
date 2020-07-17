'use strict'
const random = require('random');
const sentencer = require('sentencer');
const Propertie = require('../models/Propertie');

const types = ['Weapon', 'Armor', 'Accessory', 'Consumable']
const subtypes = {
    Weapon: ["Sword", "Axe", "Dagger", "Bow", "Claw", "Long Sword", "Battle Axe", "Warhammer", "Spear"],
    Armor: ["Helmet", "Chest", "Pants", "Boots"],
    Accessory: ["Ring", "Bracers", "Necklace", "Cape", "Ornament"],
    Consumable: ["Heal", "Stats"]
}
const rarity = {
    Common: [46, 100], 
    Uncommon: [31, 45], 
    Rare: [16, 30], 
    Unique: [6, 15], 
    Legendary: [2, 5], 
    Divine: [0, 1]
};

const quality = {
    Common: 1, 
    Uncommon: 2, 
    Rare: 3, 
    Unique: 4, 
    Legendary: 5, 
    Divine: 6
};

const attributes = [
    'Strenght', 
    'Dexterity', 
    'Constituition', 
    'Intelligence', 
    'Wisdom', 
    'Charism', 
    'Luck',
    'Resistance',
    'Iron Skin'
];

module.exports = {
    async type(exclude = []){
        let index;

        do {
            index = random.int(0, types.length-1);
        } while(exclude.includes(types[index]));
        
        return types[index];
    },

    async subtype(type, excluded_subtypes = []){ 
        let sub;
        do{
            sub = subtypes[type][random.int(0, subtypes[type].length-1)];
        } while (excluded_subtypes.includes(sub));

        return sub;
    },

    async quality(exclude = []){
        let chance;
        do {
            chance = random.int(0, 100);

            exclude.forEach(element => {
                if(rarity[element][0]<= chance && chance <= rarity[element][1]){
                    chance = -1;
                }
            });
        } while(chance < 0);

        for (const [key, value] of Object.entries(rarity)) {
            if(!exclude.includes(key)){
                if(value[0]<= chance && chance<= value[1]){
                    return quality[key];
                }
            }
        }
    },

    async name(type, subtype){
        if(type == "Consumable"){
            if(subtype == "Heal"){
                return "Potion of Healing";
            } else {
                return `Potion of ${attributes[random.int(0, attributes.length-1)]}`;
            }
        }
        return sentencer.make(subtype + " of {{ adjective }}");
    },

    async props(item_quality){
        const properties = await Propertie.findAll({ where: { rarity: item_quality } });
        const random_number = await random.int(0, properties.length-1);
        const random_prop = properties[random_number].dataValues.id;

        return random_prop;
    }
};
