import {BaseItemType as BIT} from "../types/itemTypes";
import {baseWeapons} from "./weapons/baseWeapons";
import {baseArmor} from "./armor/baseArmor";
import {baseIngredients} from "./ingredients/baseIngredients";

export const baseState: BIT[] = [
  ...baseWeapons,
  ...baseArmor,
  ...baseIngredients
]
