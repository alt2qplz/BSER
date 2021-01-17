import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Dagger, ItemEnum, ItemRarityEnum} from "./types/itemTypes";

interface TestType {
  a: number,
  b?: number
}



function App() {

  const roseKnife: Array<Dagger> = [{
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
    type: ItemEnum.weapon,
    specifications: {
      attackPower: 20,
      movementSpeed: 0.1,
      cooldownReduction: 10
    }
  }]

  return (
    <div className="App">
      {roseKnife.map(el => {
        return(
          <div>
            {el.airSupply ? <p>Air Supply: {el.airSupply}</p> : null}
            {el.name ? <p>Name: {el.name}</p> : null}
            {el.weaponType ? <p>Weapon Type: {el.weaponType}</p> : null}
            {el.type ? <p>Type: {el.type}</p> : null}
          </div>
        )
      })}
    </div>
  );
}

export default App;
