import Button from "../button";
import Watch from "./watch";
import style from './timer.module.scss'
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";

interface Props {
    selected: ITask | undefined
    endTask: () => void
}

export default function Timer({ selected, endTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeForSeconds(selected.time))
        }
    },[selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Choose your card and start the timer.</p>
            Time: {time}
            <div className={style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                start!
            </Button>
        </div>
    )
}