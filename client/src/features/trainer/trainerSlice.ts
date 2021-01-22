import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {BaseItemType as BIT} from "../../types/itemTypes"
import {baseState} from "../../state/baseState"
import {ItemRarityEnum} from "../../types/enums";
import _ from 'underscore'

interface TrainerState {
  allItems: BIT[],
  currentItem: BIT | null,
  chosenItems: BIT[],
  itemsToChoose: BIT[]
}

// Тип у которого поле ингридиетов точно не undefined
interface CurrentItemType {
  id: number
  name: string
  rarity: ItemRarityEnum
  ingredients: [number, number]
}

const initialState: TrainerState = {
  allItems: baseState,
  chosenItems: [],
  currentItem: null,
  itemsToChoose: []
}

export const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {
    newRandomCurrentItem: state => {
      // Создаем пул предметов, у которых есть инры (которые создаются из других предметов)
      let poolForCurrentItem: CurrentItemType[] = state.allItems.filter(el  => el.ingredients !== undefined) as CurrentItemType[]
      poolForCurrentItem = poolForCurrentItem.filter(el => el.id <= 8) //only daggers
      // Случайно выбираем один из предметов, его рецепт и будем угадывать
      const newCurrentItem = poolForCurrentItem[Math.floor(Math.random()*poolForCurrentItem.length)]

      // Созадем пул предметов из которых мог бы быть собрать текущий предмет, выкидывая все предметы, рариетет которых
      // выше чем у текущего предмета
      const poolForItemsToChoose: BIT[] = state.allItems.filter(el => el.rarity <= newCurrentItem.rarity)

      // Находим в этом пуле ПЕРВЫЙ необходимый для сборки предмет, записываем и вырезаем его и пула
      const firstIngredientIdx = poolForItemsToChoose.findIndex(el => el.id === newCurrentItem.ingredients[0])
      const firstIngredient: BIT = poolForItemsToChoose[firstIngredientIdx]
      poolForItemsToChoose.splice(firstIngredientIdx, 1)

      // Находим в этом пуле ВТОРОЙ необходимый для сборки предмет, записываем и вырезаем его и пула
      const secondIngredientIdx = poolForItemsToChoose.findIndex(el => el.id === newCurrentItem.ingredients[1])
      const secondIngredient: BIT = poolForItemsToChoose[secondIngredientIdx]
      poolForItemsToChoose.splice(secondIngredientIdx, 1)

      // Создаем массив из нескольких СЛУЧАЙНЫХ предметов
      const randomItemArray: BIT[] = []
      for (let i = 0; i < 3; i++) {
        if (poolForItemsToChoose.length) {
          const idx = Math.floor(Math.random()*poolForItemsToChoose.length)
          const item: BIT = poolForItemsToChoose[idx]
          poolForItemsToChoose.splice(idx, 1)
          randomItemArray.push(item)
        }
      }

      // Записываем все предметы (нужные и случайные) в один массив
      const newItemsToChose: BIT[] = []
      newItemsToChose.push(firstIngredient)
      newItemsToChose.push(secondIngredient)
      newItemsToChose.push(...randomItemArray)

      // Устанавливаем значение ТЕКУЩЕГО угадываемого предмета
      state.currentItem = newCurrentItem
      // Устанавливаем ПЕРЕМЕШАННОЕ знаечение массива с предметами
      state.itemsToChoose = _.shuffle(newItemsToChose)
      // Очищаем массив выбранных предметов
      state.chosenItems = []
    },
    setChosenItem: (state, action: PayloadAction<number>) => {
      if (state.chosenItems.length < 2) {
        const itemIdx = state.itemsToChoose.findIndex(el => el.id === action.payload)
        const item: BIT = state.itemsToChoose[itemIdx]

        const newItemsToChoose = state.itemsToChoose
        newItemsToChoose.splice(itemIdx, 1)

        state.itemsToChoose = newItemsToChoose
        state.chosenItems = [...state.chosenItems, item]
      }
    },
    removeChosenItem: (state, action: PayloadAction<number>) => {
      const itemIdx = state.chosenItems.findIndex(el => el.id === action.payload)
      const item: BIT = state.chosenItems[itemIdx]

      const newChosenItems = state.chosenItems
      newChosenItems.splice(itemIdx, 1)

      state.chosenItems = newChosenItems
      state.itemsToChoose = [...state.itemsToChoose, item]
    }



    // increment: state => {
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { newRandomCurrentItem, setChosenItem, removeChosenItem } = trainerSlice.actions

export const selectCurrentItem = (state: RootState) => state.trainer.currentItem
export const selectItemsToChoose = (state: RootState) => state.trainer.itemsToChoose
export const selectChosenItems = (state: RootState) => state.trainer.chosenItems

export default trainerSlice.reducer
