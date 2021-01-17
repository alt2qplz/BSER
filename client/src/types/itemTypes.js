"use strict";
exports.__esModule = true;
var enums_1 = require("./enums");
var roseKnife = {
    id: 4,
    name: 'Rose Knife',
    rarity: enums_1.ItemRarityEnum.blue,
    weaponType: 'Dagger',
    maxQuantityInStack: 1,
    itemBuildsInto: [{ itemId: 5 }, { itemId: 6 }],
    imageUrl: '...',
    craftQuantity: 1,
    heroList: ['...'],
    itemsForCrafting: [{ itemId: 7 }, { itemId: 8 }],
    type: enums_1.ItemTypeEnum.weapon,
    specifications: {
        attackPower: 20,
        movementSpeed: 0.1,
        cooldownReduction: 10
    }
};
