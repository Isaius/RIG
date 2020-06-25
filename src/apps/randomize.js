'use strict'
const random = require('random');
const types = ['Weapon', 'Armor', 'Accessory', 'Consumable']
const subtypes = {
    Weapon: ["Melee", "Ranged"],
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

module.exports = {
    async type(exclude = []){
        let index;

        do {
            index = random.int(0, types.length-1);
        } while(exclude.includes(types[index]));
        
        return types[index];
    },

    async subtype(type){
        return subtypes[type][random.int(0, subtypes[type].length-1)];
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
            if(value[0]<= chance && chance<= value[1]){
                return key;
            }
        }
    }
};
