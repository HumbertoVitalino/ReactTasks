import React, { useState } from 'react';
import Button from '../button';
import style from './forms.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Forms({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00")
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks => 
            [...oldTasks, 
                {
                    task,
                    time,
                    selected: false,
                    done: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTime("00:00");
    }
    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>add a new task</label>
                <input
                    type='text'
                    name='task'
                    value={task}
                    onChange={event => 
                        setTask(event.target.value)}
                    id='task'
                    placeholder='what do you want to study?'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>Time</label>
                <input
                    type='time'
                    step='1'
                    name='time'
                    value={time}
                    onChange={event => setTime(event.target.value)
                    }
                    id='time'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <Button type="submit">Add</Button>
        </form>
    )
}

export default Forms;