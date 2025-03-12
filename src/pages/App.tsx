import React from 'react';
import Forms from '../components/forms';
import List from '../components/list';
import style from './App.module.scss'
import Timer from '../components/timer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms/>
      <List/>
      <Timer/>
    </div>
  )
}

export default App;
