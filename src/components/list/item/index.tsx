import { ITask } from "../../../types/task"
import style from "../list.module.scss"

export default function Item({task, time, selected, done, id}: ITask) {
    console.log('o objeto atual é', {
        task, time, selected, done, id
    })
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}