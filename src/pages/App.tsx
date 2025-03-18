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

  function endTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(tasks => {
        if(tasks.id === selected.id) {
          return {
            ...tasks,
            selected: false,
            done: true,
          }
        }
        return tasks;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
        />
      <Timer 
        selected={selected}
        endTask={endTask}      
      />
    </div>
  )
}

export default App;
