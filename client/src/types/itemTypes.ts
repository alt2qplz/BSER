import {
  AirSupplyEnum,
  CollectEnum,
  DropChanceEnum,
  EnemiesEnum,
  GameLocationEnum,
  ItemRarityEnum,
  ItemTypeEnum
} from './enums'

export type HuntType = {enemy: EnemiesEnum, dropChance: DropChanceEnum}
export type ExploreType = {gameLocation: GameLocationEnum, quantity: number}

export interface ItemSpecificationType {
  attackPower?: number
  attackSpeed?: number
  attackRange?: number
  criticalStrike?: number
  lifeSteal?: number
  extraNormalAttackDamage?: number
  skillAmplification?: number
  cooldownReduction?: number
  maximumSP?: number
  percentRegenerationSP?: number
  RegenerationSP?: number
  defense?: number
  defenseFromNormalAttack?: number
  maximumHP?: number
  regenerationHP?: number
  regenerationPercentHP?: number
  damageReduction?: number
  movementSpeed?: number
  movementSpeedNotCombat?: number
  visionRange?: number
  healingPercentReductionSkill?: number
  healingPercentReductionNormalAttack?: number
  skillPercentDamageReduction?: number
  trapDamage?: number
}

export interface BaseItemType {
  id: number
  name: string
  rarity: ItemRarityEnum
  ingredients?: [number, number] //itemId
}

export interface ItemType extends BaseItemType {
  img: string
  type: ItemTypeEnum

  baseStack?: number
  buildsInto?: number[] //itemId
  specifications?: ItemSpecificationType
  explore?: ExploreType[]
  hunt?: HuntType[]
  airSupply?: AirSupplyEnum
  maxQuantityInStack?: number
  collect?: CollectEnum
}
