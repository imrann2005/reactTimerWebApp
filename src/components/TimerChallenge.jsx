import React, { useState,useRef } from "react"

export default function TimerChallenge({ title, targetTime }) {
    const [expireTime, setExpireTime] = useState(false);
    const[timerStarted,setTimerStarted]=useState(false);

    const timer = useRef();

    function handleStartChallenge() {

        timer.current=setTimeout(() => {
            setExpireTime((prev) => true);
        }, targetTime * 1000);

        setTimerStarted((prev)=>true);
    }

    function handleStopChallenge(){
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">

            <h2>
                {title}
            </h2>
            <p className="challenge-time">{targetTime} seconds{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                {expireTime && "You lost mate!" }
            </p>
            <p>
                <button onClick={timerStarted ? handleStopChallenge : handleStartChallenge} >
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer is running ' : 'Timer is not active'}
            </p>
        </section>

    )
}