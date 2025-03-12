import Button from "../button";
import Watch from "./watch";

export default function Timer() {
    return (
        <div>
            <p>Choose your card and start the timer.</p>
            <div>
                <Watch />
            </div>
            <Button 
                button="Start"
            />
        </div>
    )
}