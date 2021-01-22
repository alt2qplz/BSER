import React, {useEffect, useState} from 'react';
import {baseAccessoryArray} from "./state/armor/accessory/accessoryBase";
import {baseAxeArray} from "./state/weapons/axe/axeBase"
import './App.css';
import {Trainer} from "./features/trainer/Trainer";

function App() {
  return (
    <div className="App">
      <Trainer />
    </div>
  );
}

export default App;
