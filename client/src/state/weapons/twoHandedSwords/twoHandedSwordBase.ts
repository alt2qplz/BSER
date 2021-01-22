import {BaseItemType as BIT} from "../../../types/itemTypes";
import {ItemId as i} from "../../../types/itemId";
import {ItemRarityEnum as r} from "../../../types/enums";

const rustySword: BIT = {
  id: i.rustySword,
  name: 'Rusty Sword',
  rarity: r.base,
}

const shamshir: BIT = {
  id: i.shamshir,
  name: 'Shamshir',
  rarity: r.green,
  ingredients: [i.rustySword, i.lighter]
}

const katana: BIT = {
  id: i.katana,
  name: 'Katana',
  rarity: r.blue,
  ingredients: [i.rustySword, i.ironSheet]
}

const masamune: BIT = {
  id: i.masamune,
  name: 'Masamune',
  rarity: r.blue,
  ingredients: [i.katana, i.oil]
}

const muramasa: BIT = {
  id: i.muramasa,
  name: 'Muramasa',
  rarity: r.blue,
  ingredients: [i.katana, i.gemstone]
}

const bastardSword: BIT = {
  id: i.bastardSword,
  name: 'Bastard Sword',
  rarity: r.blue,
  ingredients: [i.rustySword, i.steel]
}

const jewelSword: BIT = {
  id: i.jewelSword,
  name: 'Jewel Sword',
  rarity: r.blue,
  ingredients: [i.shamshir, i.ruby]
}

const thuanThien: BIT = {
  id: i.thuanThien,
  name: 'Thuan Thien',
  rarity: r.blue,
  ingredients: [i.bastardSword, i.turtleShell]
}

const plasmaSword: BIT = {
  id: i.plasmaSword,
  name: 'Plasma Sword',
  rarity: r.blue,
  ingredients: [i.bastardSword, i.laserPointer]
}

const arondight: BIT = {
  id: i.arondight,
  name: 'Arondight',
  rarity: r.purple,
  ingredients: [i.masamune, i.cross]
}

const excalibur: BIT = {
  id: i.excalibur,
  name: 'Excalibur',
  rarity: r.purple,
  ingredients: [i.jewelSword, i.holyGrail]
}

const monohoshizao: BIT = {
  id: i.monohoshizao,
  name: 'Monohoshizao',
  rarity: r.purple,
  ingredients: [i.muramasa, i.blueprint]
}

const hovud: BIT = {
  id: i.hovud,
  name: 'Hovud',
  rarity: r.purple,
  ingredients: [i.jewelSword, i.glassPieces]
}

const leavateinn: BIT = {
  id: i.laevateinn,
  name: 'Laevateinn',
  rarity: r.yellow,
  ingredients: [i.trueSamadhiFire, i.shamshir]
}

const dainsleif: BIT = {
  id: i.dainsleif,
  name: 'Dainsleif',
  rarity: r.yellow,
  ingredients: [i.VFBloodSample, i.katana]
}

export const baseTwoHandedSwordArray: BIT[] = [
  rustySword, shamshir, katana, masamune, muramasa,
  bastardSword, jewelSword, thuanThien, plasmaSword, arondight,
  excalibur, monohoshizao, hovud, leavateinn, dainsleif
]




