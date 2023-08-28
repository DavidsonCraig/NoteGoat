import { useEffect } from "react"
import { useOutletContext } from "react-router"

const RootAchievements = (props) => {
    const statsCMaj = props.statsCMaj
    const statsGMaj = props.statsGMaj
    const statsDMaj = props.statsDMaj
    const statsAMaj = props.statsAMaj
    const statsEMaj = props.statsEMaj
    const statsBMaj = props.statsBMaj
    const statsFSharpMaj = props.statsFSharpMaj
    const statsCSharpMaj = props.statsCSharpMaj
    const statsFMaj = props.statsFMaj
    const statsBFlatMaj = props.statsBFlatMaj
    const statsEFlatMaj = props.statsEFlatMaj
    const statsAFlatMaj = props.statsAFlatMaj
    const statsDFlatMaj = props.statsDFlatMaj
    const statsGFlatMaj = props.statsGFlatMaj
    const statsCFlatMaj = props.statsCFlatMaj

    const totalCorrectNotes = props.totalCorrectNotes
    const unlockAchievement = props.unlockAchievement

    //Stats for each key signature
    //Three blocks of four (Due to shallow comparison of react)
    //Block 1 = High score
    //Block 2 = Total correct notes
    //Block 3 = Total incorrect notes
    //Within each block: 0 = novice, 1 = advanced, 2 = expert, 3 = GOAT

    useEffect(() => {
        let firstAchievement = 37
        if (statsCMaj[0] >= 10) {
            unlockAchievement(38)
        }
    }, [statsCMaj])

    return null;
}
 
export default RootAchievements;