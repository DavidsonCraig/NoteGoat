import { useEffect, useRef } from "react";
import anime from "animejs";

const Timer = (props) => {
    const combo = props.combo
    const resetCombo = props.resetCombo
    const comboTime = props.comboTime

    const timeoutRef = useRef(null)
    const animeRef = useRef(null)

    const resetWidth = (() => {
        const timerElement = document.querySelector(".timeRemaining")
        timerElement.style.width = "100%"
    })
    
    useEffect(() => {
        clearTimeout(timeoutRef.current)
        resetWidth()
        if (animeRef.current) {
            animeRef.current.reset();
        }
        
        if (combo != 0) {
            timeoutRef.current = setTimeout(() => {
                resetCombo()
            }, comboTime - (Math.min((combo * 100), 2500)))
            
            animeRef.current = anime ({
                targets: ".timeRemaining",
                width: "0%",
                easing: "linear",
                duration: comboTime - (Math.min((combo * 100), 2500)),
            })
        }

        return (() => {
            clearTimeout(timeoutRef.current)
            if (animeRef.current) {
                animeRef.current.reset()
            }
            
        })
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