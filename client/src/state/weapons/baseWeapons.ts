import {BaseItemType as BIT} from "../../types/itemTypes";
import {baseAxeArray} from "./axe/axeBase";
import {baseDaggerArray} from "./daggers/daggersBase";
import {baseTwoHandedSwordArray} from "./twoHandedSwords/twoHandedSwordBase";
import {baseDualSwordsArray} from "./dualSwords/dualSwordsBase";
import {baseBatArray} from "./bat/batBase";

export const baseWeapons: BIT[] = [
  ...baseAxeArray,
  ...baseDaggerArray,
  ...baseDualSwordsArray,
  ...baseTwoHandedSwordArray,
  ...baseBatArray
]
