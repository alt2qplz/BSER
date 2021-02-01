import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  newRandomCurrentItem,
  selectCurrentItem,
  selectItemsToChoose,
  setChosenItem,
  selectChosenItems,
  removeChosenItem
} from './trainerSlice'
import { BaseItemType as BIT } from '../../types/itemTypes'
import _ from 'underscore'

export const Trainer = () => {
  const currentItem = useSelector(selectCurrentItem)
  const itemsToChoose = useSelector(selectItemsToChoose)
  const chosenItems = useSelector(selectChosenItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newRandomCurrentItem())
  }, [])

  useEffect(() => {
    if (itemsCheck(currentItem, chosenItems)) {
      dispatch(newRandomCurrentItem())
    }
  }, [chosenItems])

  const itemsCheck = (currentItem: BIT | null, chosenItems: BIT[]) => {
    if (!currentItem || !currentItem.ingredients) {
      return false
    }
    return (
      _.difference(
        currentItem.ingredients,
        chosenItems.map((el) => el.id)
      ).length === 0
    )
  }

  return (
    <div>
      <p>Текущий предмет: {currentItem?.name}</p>
      <hr />
      <p>Выбранные предметы:</p>
      {chosenItems.map((el) => (
        <p key={el.id} onClick={() => dispatch(removeChosenItem(el.id))}>
          {el.name}
        </p>
      ))}
      <hr />
      <p>Выберите два предмета на выбор:</p>
      {itemsToChoose.map((el) => (
        <p key={el.id} onClick={() => dispatch(setChosenItem(el.id))}>
          {el.name}
        </p>
      ))}
      <hr />
      <button onClick={() => dispatch(newRandomCurrentItem())}>click</button>
    </div>
  )
}
