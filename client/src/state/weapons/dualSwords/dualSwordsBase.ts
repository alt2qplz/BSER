import {BaseItemType as BIT} from "../../../types/itemTypes";
import {ItemId as i} from "../../../types/itemId";
import {ItemRarityEnum as r} from "../../../types/enums";

const twinSwords: BIT = {
  id: i.twinSwords,
  name: 'Twin Swords',
  rarity: r.green,
  ingredients: [i.kitchenKnife, i.rustySword]
}

const florentine: BIT = {
  id: i.florentine,
  name: 'Florentine',
  rarity: r.blue,
  ingredients: [i.twinSwords, i.blueprint]
}

const divineDualSwords: BIT = {
  id: i.divineDualSwords,
  name: 'Divine Dual Swords',
  rarity: r.purple,
  ingredients: [i.florentine, i.nail]
}

const starsteelTwinSwords: BIT = {
  id: i.starsteelTwinSwords,
  name: 'Starsteel Twin Swords',
  rarity: r.purple,
  ingredients: [i.twinSwords, i.moonstone]
}

const dioscuri: BIT = {
  id: i.dioscuri,
  name: 'Dioscuri',
  rarity: r.purple,
  ingredients: [i.twinSwords, i.ionBattery]
}

const lloigorZahr: BIT = {
  id: i.lloigorZahr,
  name: 'Lloigor & Zahr',
  rarity: r.purple,
  ingredients: [i.twinSwords, i.poison]
}

export const baseDualSwordsArray: BIT[] = [
  twinSwords,
  florentine,
  divineDualSwords,
  starsteelTwinSwords,
  dioscuri,
  lloigorZahr
]
