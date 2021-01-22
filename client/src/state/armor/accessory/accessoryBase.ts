import {BaseItemType as BIT} from "../../../types/itemTypes";
import {ItemId as i} from "../../../types/itemId";
import {ItemRarityEnum as r} from "../../../types/enums";

const feather: BIT = {
  id: i.feather,
  name: 'Feather',
  rarity: r.base,
}

const flower: BIT = {
  id: i.flower,
  name: 'Flower',
  rarity: r.base
}

const cross: BIT = {
  id: i.cross,
  name: 'Cross',
  rarity: r.base
}

const holyGrail: BIT = {
  id: i.holyGrail,
  name: 'Holy Grail',
  rarity: r.base
}

const saintsRelic: BIT = {
  id: i.saintsRelic,
  name: "Saint's Relic",
  rarity: r.green,
  ingredients: [i.cross, i.holyGrail]
}

export const baseAccessoryArray: BIT[] = [
  feather,
  flower,
  cross,
  holyGrail,
  saintsRelic
]
