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
            }, comboTime - (Math.min((combo * 100), 2500)))

            animeRef.current = anime ({
                targets: ".timeRemaining",
                width: 0.1,
                easing: "linear",
                duration: comboTime - (Math.min((combo * 100), 2500)),
            })
        }
    },[combo])

    return ( 
        <div className="timerContainer">
            <div className="timerInnerContainer">
                <div className="timerBody">
                    <div className="timeRemaining">
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Timer;