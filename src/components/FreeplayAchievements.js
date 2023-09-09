import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const FreeplayAchievements = (props) => {
    const outletContext = useOutletContext()
    const notesDown = outletContext.notesDown
    const unlockAchievement = outletContext.unlockAchievement

    const [noteHistory, setNoteHisory] = useState([0,0,0,0])

    const getNote = ((x) => {
        switch (x % 12) {
            case 0:
                return "C"
            case 2:
                return "D"
            case 4:
                return "E"
            case 5: 
                return "F"
            case 7:
                return "G"
            case 9:
                return "A"
            case 11:
                return "B"
            default:
                return ""
        }
    })

    useEffect(() => {
        let x = Object.keys(notesDown)
        let y
        if (x.length == 1) {
            let note = getNote(x)
            y = [...noteHistory]
            y.shift()
            y.push(note)
            setNoteHisory(y)
        }
    }, [notesDown])

    useEffect(() => {
        let x = noteHistory

        if (x[1] == "B" && x[2] == "A" && x[3] == "D") {
            unlockAchievement(16)
        }

        if (x[1] == "B" && x[2] == "E" && x[3] == "D") {
            unlockAchievement(17)
        }

        if (x[1] == "C" && x[2] == "A" && x[3] == "B") {
            unlockAchievement(18)
        }

        if (x[1] == "B" && x[2] == "E" && x[3] == "E") {
            unlockAchievement(19)
        }

        if (x[1] == "D" && x[2] == "A" && x[3] == "B") {
            unlockAchievement(20)
        }

        if (x[1] == "A" && x[2] == "C" && x[3] == "E") {
            unlockAchievement(21)
        }

        if (x[0] == "D" && x[1] == "E" && x[2] == "A" && x[3] == "D") {
            unlockAchievement(22)
        }

        if (x[1] == "F" && x[2] == "E" && x[3] == "D") {
            unlockAchievement(23)
        }

        if (x[0] == "C" && x[1] == "A" && x[2] == "F" && x[3] == "E") {
            unlockAchievement(24)
        }

    }, noteHistory)

    return null;
}
 
export default FreeplayAchievements;