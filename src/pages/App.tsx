import React, { useState } from 'react';
import Forms from '../components/forms';
import List from '../components/list';
import style from './App.module.scss'
import Timer from '../components/timer';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();
  
  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
        />
      <Timer selected={selected}/>
    </div>
  )
}

export default App;
