import { createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {BaseItemType as BIT} from "../../types/itemTypes"
import {baseState} from "../../state/baseState"
import {ItemRarityEnum} from "../../types/enums";

interface TrainerState {
  allItems: BIT[],
  currentItem: BIT | null,
  chosenItems: BIT[],
  itemsToChoose: BIT[]
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
      let poolForRandomItem = state.allItems.filter(el => typeof el.ingredients !== "undefined")
      poolForRandomItem = poolForRandomItem.filter(el => el.id <= 8) //only daggers
      const newCurrentItem = poolForRandomItem[Math.floor(Math.random()*poolForRandomItem.length)]

      let poolForItemsToChoose = state.allItems.filter(el => el.rarity <= newCurrentItem.rarity)

      const newItemsToChose = []
      // @ts-ignore
      newItemsToChose.push(poolForItemsToChoose.find(el => el.id === newCurrentItem.ingredients[0]))
      // @ts-ignore
      newItemsToChose.push(poolForItemsToChoose.find(el => el.id === newCurrentItem.ingredients[1]))


      state.currentItem = newCurrentItem
      // state.itemsToChoose = newItemsToChose
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

export const { newRandomCurrentItem } = trainerSlice.actions

export const selectCurrentItem = (state: RootState) => state.trainer.currentItem
export const selectItemsToChoose = (state: RootState) => state.trainer.itemsToChoose

export default trainerSlice.reducer
