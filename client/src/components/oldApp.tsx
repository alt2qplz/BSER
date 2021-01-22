import React, {useEffect, useState} from 'react';
import {baseAccessoryArray} from "../state/armor/accessory/accessoryBase";
import {baseAxeArray} from "../state/weapons/axe/axeBase"

type ItemType = {
  id: number,
  name: string,
  to: number[] | never[],
  from: number[]
}

function App() {
  const [currentItem, setCurrentItem] = useState<ItemType | null>(null)
  const [currentFrom, setCurrentFrom] = useState<ItemType[]>([])
  const [items, setItems] = useState<ItemType[]>([
    {id: 0, name: 'Name0', to: [], from: [1, 2]},
    {id: 1, name: 'Name1', to: [], from: [0, 1]},
    {id: 2, name: 'Name2', to: [], from: [3, 2]},
    {id: 3, name: 'Name3', to: [], from: [2, 0]},
  ])

  useEffect(() => {
    const item: ItemType = items[Math.floor(Math.random() * 4)]
    setCurrentItem(item)
  }, [])

  useEffect(() => {
    if (currentItem !== null &&
      currentFrom[0]?.id === currentItem?.from[0] &&
      currentFrom[1]?.id === currentItem?.from[1]
    ) {
      console.log('heh')
      alert('POBEDA')
      //вернуть всё к началу
      //reloader()
    }
  }, [currentFrom])

  const addItemInFromArray = (item: ItemType) => {
    if (currentFrom.length < 2) {
      setItems(items.filter(el => el.id !== item.id))
      setCurrentFrom([...currentFrom, item])
    }
  }

  const removeItemInFromArray = (item: ItemType) => {
    setCurrentFrom(currentFrom.filter(el => el.id !== item.id))
    setItems([...items, item])
  }


  return (
    <div className="App">
      {currentItem
        ? <div>
          <p>{currentItem.name}</p>
          <p>{currentItem.from[0]}</p>
          <p>{currentItem.from[1]}</p>
        </div>
        : null}
      <hr/>
      {items.map(el => {
        return (
          <div style={{width: 200, height: 100, border: '1px solid white'}} onClick={() => addItemInFromArray(el)}>
            <p>{el.id}</p>
          </div>
        )
      })}
      <hr/>
      {currentFrom.map(el => {
        return (
          <div style={{width: 200, height: 100, border: '1px solid white'}} onClick={() => removeItemInFromArray(el)}>
            <p>{el.id}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
