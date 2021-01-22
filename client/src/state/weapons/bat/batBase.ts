import {BaseItemType as BIT} from "../../../types/itemTypes"
import {ItemId as i} from "../../../types/itemId"
import {ItemRarityEnum as r} from "../../../types/enums"

const branch: BIT = {
  id: i.branch,
  name: 'Branch',
  rarity: r.base
}

export const baseBatArray: BIT[] = [
  branch
]
