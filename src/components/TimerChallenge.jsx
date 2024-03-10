import React, { useState,useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    
    const [timeRemaining,setTimeRemaining]=useState(targetTime * 1000);

    const timer = useRef(); //reference for timer
    const dialog = useRef(); //ref for turning on dialog when you loose in any way

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    //To clear the setImterval if time has been over
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStartChallenge() {

        timer.current=setInterval(() => {
            
          setTimeRemaining((prevTime)=>prevTime-10);
        }, 10);

        
    }

    function handleStopChallenge(){
        clearInterval(timer.current);
        
        dialog.current.open();
    }

    return (
        
        <section className="challenge">
       <ResultModal ref={dialog} targetTime={targetTime} result={'lost'}></ResultModal>
            <h2>
                {title}
            </h2>
            <p className="challenge-time">{targetTime} seconds{targetTime > 1 ? 's' : ''}
            </p>
           
            <p>
                <button onClick={timerIsActive ? handleStopChallenge : handleStartChallenge} >
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Timer is running ' : 'Timer is not active'}
            </p>
        </section>

    )
}