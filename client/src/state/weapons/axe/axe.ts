import {ItemType} from "../../../types/itemTypes";
import {ItemId} from "../../../types/itemId";
import {
  DropChanceEnum,
  EnemiesEnum,
  GameLocationEnum,
  ItemRarityEnum,
  ItemTypeEnum,
  WeaponEnum
} from "../../../types/enums";

interface TypicalAxeType {
  type: ItemTypeEnum.weapon
  weaponType: WeaponEnum.axe
  heroList: string[]
}

const typicalAxe: TypicalAxeType = {
  type: ItemTypeEnum.weapon,
  weaponType: WeaponEnum.axe,
  heroList: ['Jackie']
}

type Axe = TypicalAxeType & ItemType

const pickaxe: Axe = {
  ...typicalAxe,
  id: ItemId.pickaxe,
  name: 'Pickaxe',
  explore: [
    {gameLocation: GameLocationEnum.pond, quantity: 7},
    {gameLocation: GameLocationEnum.beach, quantity: 7},
    {gameLocation: GameLocationEnum.cemetery, quantity: 7},
    {gameLocation: GameLocationEnum.forest, quantity: 8}
  ],
  hunt: [
    {enemy: EnemiesEnum.bat, dropChance: DropChanceEnum.rarely}
  ],
  rarity: ItemRarityEnum.base,
  img: '...',
  specifications: {
    attackPower: 15
  },
  buildsInto: [ItemId.chainScythe, 14032]
}

const hatchet: Axe = {
  ...typicalAxe,
  id: ItemId.hatchet,
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
  img: '...',
  specifications: {
    attackPower: 25
  },
  buildsInto: [ItemId.battleAxe, 21535, ItemId.halberdAxe]
}
