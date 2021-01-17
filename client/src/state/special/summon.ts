import {Item} from "../../types/itemTypes";
import {ItemTypeEnum} from "../../types/enums";

interface Summon extends Item {
  type: ItemTypeEnum.special
  specialType: 'Summon'
  trapEffect?: string
}
