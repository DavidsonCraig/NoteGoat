import { useEffect } from "react";
import { useOutletContext } from "react-router";

const TutorialAchievements = (props) => {
    const outletContext = useOutletContext()
    const unlockAchievement = outletContext.unlockAchievement
    const notesDown = outletContext.notesDown

    const combo = props.combo
    const prevNote = props.prevNote 
    const tutorialStep = props.tutorialStep 
    const note = props.note
    
    useEffect(() => {
        if (combo > 0) {
            switch(tutorialStep) {
                case 0:
                    unlockAchievement(4)
                    break
                case 1:
                    unlockAchievement(5)
                    break
                case 3:
                    unlockAchievement(6)
                    break
                case 5:
                    unlockAchievement(7)
                    break
                case 7:
                    unlockAchievement(8)
                    break
                case 9:
                    unlockAchievement(2)
                    break
                case 11:
                    unlockAchievement(3)
                    break
                case 13:
                    unlockAchievement(9)
                default:
                    break
            }
        }
    }, [combo])
    
    useEffect(() => {
        if (tutorialStep === 29) {
            unlockAchievement(10)
        }
    }, [tutorialStep])
    

    return null;
}
 
export default TutorialAchievements;