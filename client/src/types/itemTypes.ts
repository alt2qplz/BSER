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
export type ItemId = {itemId: number}

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

export interface Item {
  id: number
  name: string
  imageUrl: string
  type: ItemTypeEnum
  rarity: ItemRarityEnum

  itemBuildsInto?: ItemId[]
  specifications?: ItemSpecificationType
  itemsForCrafting?: [ItemId, ItemId]
  craftQuantity?: number
  explore?: ExploreType[]
  hunt?: HuntType[]
  airSupply?: AirSupplyEnum
  maxQuantityInStack?: number
  collect?: CollectEnum
}

export interface Dagger extends Item {
  type: ItemTypeEnum.weapon
  weaponType: 'Dagger'
  heroList: [string]
}

const roseKnife: Dagger = {
  id: 4,
  name: 'Rose Knife',
  rarity: ItemRarityEnum.blue,
  weaponType: 'Dagger',
  maxQuantityInStack: 1,
  itemBuildsInto: [{itemId: 5}, {itemId: 6}],
  imageUrl: '...',
  craftQuantity: 1,
  heroList: ['...'],
  itemsForCrafting: [{itemId: 7}, {itemId: 8}],
  type: ItemTypeEnum.weapon,
  specifications: {
    attackPower: 20,
    movementSpeed: 0.1,
    cooldownReduction: 10
  }
}
