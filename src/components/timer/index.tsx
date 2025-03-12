import Button from "../button";
import Watch from "./watch";
import style from './timer.module.scss'

export default function Timer() {
    return (
        <div className={style.timer}>
            <p className={style.title}>Choose your card and start the timer.</p>
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button 
                button="start"
            />
        </div>
    )
}