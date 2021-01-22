import React, {useEffect, useState} from 'react';
import _ from 'underscore'
import {baseAccessoryArray} from "../state/armor/accessory/accessoryBase";
import {baseAxeArray} from "../state/weapons/axe/axeBase"
import {ItemId as i} from "../types/itemId";
import {BaseItemType as BIT} from "../types/itemTypes";
import '../App.css';

export const MVP = () => {
  const [currentItem, setCurrentItem] = useState<BIT>()
  const [currentFrom, setCurrentFrom] = useState<BIT[]>([])
  const [items, setItems] = useState<BIT[]>([...baseAxeArray, ...baseAccessoryArray])

  useEffect(() => {
    // const item: BIT = items[Math.floor(Math.random() * 4)]
    setCurrentItem(baseAxeArray.find(el => el.id === i.lightHatchet))
  }, [])

  useEffect(() => {
      if (itemsCheck(currentItem, currentFrom)) {
        alert('POBEDA')
        setCurrentItem(baseAxeArray.find(el => el.id === i.lightHatchet))
        setItems([...baseAxeArray, ...baseAccessoryArray])
        setCurrentFrom([])
      }
  }, [currentFrom])

  const itemsCheck = (currentItem: BIT | undefined, currentFrom: BIT[]) => {
    if (!currentItem || !currentItem.ingredients) return false
    return _.difference(currentItem.ingredients, currentFrom.map(el => el.id)).length === 0;
  }

  const addItemInFromArray = (item: BIT) => {
    if (currentFrom.length < 2) {
      setItems(items.filter(el => el.id !== item.id))
      setCurrentFrom([...currentFrom, item])
    }
  }

  const removeItemInFromArray = (item: BIT) => {
    setCurrentFrom(currentFrom.filter(el => el.id !== item.id))
    setItems([...items, item])
  }

  return (
    <>
      <div style={{margin: '0 auto', width: '200px',}}>
        {currentItem
          ? <div style={{width: 200, height: 100, border: '1px solid white', padding: 10}}>
            <p>{currentItem.name}</p>
            {currentItem.ingredients
              ? <p>{currentItem.ingredients[0]} & {currentItem.ingredients[1]}</p>
              : null
            }
          </div>
          : null}
      </div>



      <hr/>
      <p style={{textAlign: 'center'}}>Выбери два прдемета</p>
      <div style={{margin: '0 auto',  width: items.length * 200,display: 'flex'}}>
      {items.map(el => {
        return (
          <div
            key={el.id}
            style={{width: 200, height: 100, border: '1px solid white', padding: 10}}
            onClick={() => addItemInFromArray(el)}
          >
            <p>{el.id}</p>
            <p>{el.name}</p>
          </div>
        )
      })}
      </div>



      <hr/>
      <p style={{textAlign: 'center'}}>Выбранне предметы</p>
      <div style={{margin: '0 auto', width: currentFrom.length * 200, display: 'flex'}}>
      {currentFrom.map(el => {
        return (
          <div
            key={el.id}
            style={{width: 200, height: 100, border: '1px solid white', padding: 10}}
            onClick={() => removeItemInFromArray(el)}
          >
            <p>{el.id}</p>
            <p>{el.name}</p>
          </div>
        )
      })}
      </div>
    </>
  )
}
