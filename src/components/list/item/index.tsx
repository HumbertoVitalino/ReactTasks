import { ITask } from "../../../types/task"
import style from "./item.module.scss"

interface Props extends ITask {
    selectTask: (selectTask: ITask) =>  void
}

export default function Item(
    {
        task, 
        time, 
        selected, 
        done, 
        id, 
        selectTask
    }: Props) {    
    return (
        <li className={`${style.item} ${selected ? style.selectedItem : ''} ${done ? style.doneItem: ''}`} onClick={() => !done && selectTask({
            task,
            time,
            selected,
            done,
            id
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {done && <span className={style.done}
            aria-label="task done"></span>}
        </li>
    )
}