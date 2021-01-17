import {Item} from "../../types/itemTypes";
import {ItemId} from "../../types/itemId";
import {
  DropChanceEnum,
  EnemiesEnum,
  GameLocationEnum,
  ItemRarityEnum,
  ItemTypeEnum,
  WeaponEnum
} from "../../types/enums";

const axeHeroList: string[] = ['Jackie']

interface Axe extends Item {
  type: ItemTypeEnum.weapon
  weaponType: WeaponEnum.axe
  heroList: string[]
}

const pickaxe: Axe = {
  type: ItemTypeEnum.weapon,
  weaponType: WeaponEnum.axe,
  heroList: axeHeroList,
  id: ItemId.pickaxe,
  name: 'Pickaxe',
  explore: [
    {gameLocation: GameLocationEnum.pond, quantity: 7},
    {gameLocation: GameLocationEnum.beach, quantity: 7},
    {gameLocation: GameLocationEnum.cemetery, quantity: 7},
    {gameLocation: GameLocationEnum.forest, quantity: 8},
  ],
  hunt: [
    {enemy: EnemiesEnum.bat, dropChance: DropChanceEnum.rarely}
  ],
  rarity: ItemRarityEnum.base,
  imageUrl: '...',
  specifications: {
    attackPower: 15
  },
  itemBuildsInto: [
    {itemId: ItemId.chainScythe},
    {itemId: 14032} //gold
  ]
}

const hatchet: Axe = {
  type: ItemTypeEnum.weapon,
  weaponType: WeaponEnum.axe,
  heroList: axeHeroList,
  id: 3002,
  name: 'Hatchet',
  explore: [
    {gameLocation: GameLocationEnum.pond, quantity: 4},
    {gameLocation: GameLocationEnum.beach, quantity: 5},
    {gameLocation: GameLocationEnum.factory, quantity: 4},
  ],
  hunt: [
    {enemy: EnemiesEnum.wildDog, dropChance: DropChanceEnum.rarely}
  ],
  rarity: ItemRarityEnum.base,
  imageUrl: '...',
  specifications: {
    attackPower: 25
  },
  itemBuildsInto: [
    {itemId: ItemId.battleAxe},
    {itemId: 21535}, // Pendulum Axe (Summon)
    {itemId: 5153} //Halberd Axe (Spear)
  ]
}

const lightHatched: Axe = {
  id: 0,
  name: 'Light Hatched',
  itemsForCrafting: [{itemId: 1}, {itemId: 2}],
  craftQuantity: 1,
  heroList: axeHeroList,
  imageUrl: '...',
  itemBuildsInto: [{itemId: 3}],
  maxQuantityInStack: 1,
  rarity: ItemRarityEnum.blue,
  type: ItemTypeEnum.weapon,
  weaponType: WeaponEnum.axe,
  specifications: {
    attackPower: 61,
    movementSpeed: 0.1
  }
}
