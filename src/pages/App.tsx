import React from 'react';
import Forms from '../components/forms';
import List from '../components/list';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms/>
      <List/>
    </div>
  )
}

export default App;
