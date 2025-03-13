import React, { useState } from 'react';
import Forms from '../components/forms';
import List from '../components/list';
import style from './App.module.scss'
import Timer from '../components/timer';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer/>
    </div>
  )
}

export default App;
