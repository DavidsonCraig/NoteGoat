import { useEffect, useState, useRef } from "react";
import anime from "animejs";

const Timer = (props) => {
    const combo = props.combo
    const resetCombo = props.resetCombo
    const comboTime = props.comboTime

    const timeoutRef = useRef(null)
    const animeRef = useRef(null)
    
    useEffect(() => {
        clearTimeout(timeoutRef.current)
        if (animeRef.current) {
            animeRef.current.reset();
        }
        
        if (combo != 0) {
            timeoutRef.current = setTimeout(() => {
                resetCombo()
            }, comboTime)

            animeRef.current = anime ({
                targets: ".timeRemaining",
                width: 0.1,
                easing: "linear",
                duration: comboTime,
            })
        }
    },[combo])

    return ( 
        <div className="timer-container">
            <div className="timerBody">
                <div className="timeRemaining">

                </div>
            </div>
        </div>
    );
}
 
export default Timer;