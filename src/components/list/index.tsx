import React, { useState } from 'react';
import style from './list.module.scss';
import Item from './item';

function List() {
    const [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'javascript',
        time: '01:00:00'
    },
    {
        task: 'typescript',
        time: '10:00:00'
    }]);
    return(
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, { task: "study states", time: "05:00:00"}])
            }}> daily studies</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;