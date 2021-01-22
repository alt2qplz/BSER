import {BaseItemType as BIT} from "../../../types/itemTypes"
import {ItemId as i} from "../../../types/itemId"
import {ItemRarityEnum as r} from "../../../types/enums"

// id: number
// name: string
// type: ItemTypeEnum
// rarity: ItemRarityEnum
//
// BuildsInto?: number[]
// itemsNeededToCreate?: [number, number]
// baseStack?: number

// В данных объектах, также присутствует информация о том,
// в какие предметы эти объекты складываются, но далее я делал без неё

const pickaxe: BIT = {
  id: i.pickaxe,
  name: 'Pickaxe',
  rarity: r.base,
  // buildsInto: [i.chainScythe, i.gold],
}

const hatched: BIT = {
  id: i.hatchet,
  name: 'Hatched',
  rarity: r.base,
  // buildsInto: [i.battleAxe, i.pendulumAxe, i.halberdAxe]
}

const chainScythe: BIT = {
  id: i.chainScythe,
  name: 'Chain Scythe',
  rarity: r.green,
  // buildsInto: [i.reapersScythe],
  ingredients: [i.pickaxe, i.steelChain]
}

const battleAxe: BIT = {
  id: i.battleAxe,
  name: 'Battle Axe',
  rarity: r.green,
  // buildsInto: [i.lightHatchet, i.giganticAxe],
  ingredients: [i.hatchet, i.bamboo]
}

const lightHetchet: BIT = {
  id: i.lightHatchet,
  name: 'Light Hatchet',
  rarity: r.blue,
  ingredients: [i.battleAxe, i.feather],
  // buildsInto: [i.parashu]
}

const reapersScythe:BIT = {
  id: i.reapersScythe,
  name: `Reaper's Scythe`,
  rarity: r.blue,
  ingredients: [i.chainScythe, i.shortRod],
  // buildsInto: [i.santaMuerte, i.scythe, i.harpe]
}

const giganticAxe: BIT = {
  id: i.giganticAxe,
  name: 'Gigantic Axe',
  rarity: r.blue,
  ingredients: [i.battleAxe, i.steel],
  // buildsInto: [i.beamAxe]
}

const beamAxe: BIT = {
  id: i.beamAxe,
  name: 'Beam Axe',
  rarity: r.purple,
  ingredients: [i.giganticAxe, i.laserPointer],
}

const scythe: BIT = {
  id: i.scythe,
  name: 'Scythe',
  rarity: r.purple,
  ingredients: [i.reapersScythe, i.gold]
}

const parashu: BIT = {
  id: i.parashu,
  name: 'Parashu',
  rarity: r.purple,
  ingredients: [i.lightHatchet, i.buddhaSarira]
}

const harpe: BIT = {
  id: i.harpe,
  name: 'Harpe',
  rarity: r.purple,
  ingredients: [i.reapersScythe, i.whiteCraneFan]
}

export const baseAxeArray: BIT[] = [
  pickaxe,
  hatched,
  chainScythe,
  battleAxe,
  lightHetchet,
  reapersScythe,
  giganticAxe,
  beamAxe,
  scythe,
  parashu,
  harpe
]
