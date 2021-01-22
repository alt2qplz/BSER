import {BaseItemType as BIT} from "../../../types/itemTypes";
import {ItemId as i} from "../../../types/itemId";
import {ItemRarityEnum as r} from "../../../types/enums";

const scissors: BIT = {
  id: i.scissors,
  name: 'Scissors',
  rarity: r.base
}

const fountainPen: BIT = {
  id: i.fountainPen,
  name: 'Fountain Pen',
  rarity: r.base
}

const kitchenKnife: BIT = {
  id: i.kitchenKnife,
  name: 'Kitchen Knife',
  rarity: r.base
}

const armyKnife: BIT = {
  id: i.armyKnife,
  name: 'Army Knife',
  rarity: r.green,
  ingredients: [i.kitchenKnife, i.branch]
}

const roseKnife: BIT = {
  id: i.roseKnife,
  name: 'Rose Knife',
  rarity: r.blue,
  ingredients: [i.armyKnife, i.flower]
}

const carnwennan: BIT = {
  id: i.carnwennan,
  name: 'Carnwennan',
  rarity: r.purple,
  ingredients: [i.roseKnife, i.saintsRelic]
}

const mountSlicer: BIT = {
  id: i.mountSlicer,
  name: 'Mount Slicer',
  rarity: r.purple,
  ingredients: [i.roseKnife, i.ash]
}

const vibroblade: BIT = {
  id: i.vibroblade,
  name: 'Vibroblade',
  rarity: r.purple,
  ingredients: [i.armyKnife, i.motor]
}

const fragarach: BIT = {
  id: i.fragarach,
  name: 'Fragarach',
  rarity: r.yellow,
  ingredients: [i.armyKnife, i.forceCore]
}

export const baseDaggerArray: BIT[] = [
  scissors,
  fountainPen,
  kitchenKnife,
  armyKnife,
  roseKnife,
  carnwennan,
  mountSlicer,
  vibroblade,
  fragarach
]





