import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {newRandomCurrentItem, selectCurrentItem, selectItemsToChoose} from './trainerSlice'

export const Trainer = () => {
  const currentItem = useSelector(selectCurrentItem)
  const itemsToChoose = useSelector(selectItemsToChoose)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newRandomCurrentItem())
  }, [])

  return (
    <div>
      <p>
        Текущий предмет: {currentItem?.name}
      </p>
      <hr/>
      <p>
        Выбранные предметы:
      </p>
      <hr/>
      <p>
        Выберите два предмета на выбор:
      </p>
      {itemsToChoose.map(el => <p key={el.id}>{el.name}</p>)}
      <button onClick={() => dispatch(newRandomCurrentItem())}>
        click
      </button>
    </div>
  )

}
