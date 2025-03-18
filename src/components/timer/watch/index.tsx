import style from './watch.module.scss'

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesDez, minutesUni] = String(minutes).padStart(2, '0');
    const [secondDez, secondUni] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={style.watchNumber}>{minutesDez}</span>
            <span className={style.watchNumber}>{minutesUni}</span>
            <span className={style.watchDiv}>:</span>
            <span className={style.watchNumber}>{secondDez}</span>
            <span className={style.watchNumber}>{secondUni}</span>
        </>
    )
}