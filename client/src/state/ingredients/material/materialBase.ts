import {BaseItemType as BIT} from "../../../types/itemTypes"
import {ItemId as i} from "../../../types/itemId"
import {ItemRarityEnum as r} from "../../../types/enums"

const ash: BIT = {
  id: i.ash,
  name: 'Ash',
  rarity: r.green,
  ingredients: [i.paper, i.lighter]
}

const paper: BIT = {
  id: i.paper,
  name: 'Paper',
  rarity: r.base,
}

const lighter: BIT = {
  id: i.lighter,
  name: 'Lighter',
  rarity: r.base
}

const motor: BIT = {
  id: i.motor,
  name: 'Motor',
  rarity: r.blue,
  ingredients: [i.electronicParts, i.scrapMetal]
}

const forceCore: BIT = {
  id: i.forceCore,
  name: 'Force Core',
  rarity: r.purple,
  ingredients: [i.powderOfLife, i.meteorite]
}

export const baseMaterialArray: BIT[] = [
  ash,
  lighter,
  paper,
  motor,
  forceCore
]
