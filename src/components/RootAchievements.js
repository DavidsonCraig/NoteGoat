import { useEffect } from "react"

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
    const numOfAchievementsUnlocked = props.numOfAchievementsUnlocked

    //Stats for each key signature
    //Three blocks of four (Due to shallow comparison of react)
    //Block 1 = High score
    //Block 2 = Total correct notes
    //Block 3 = Total incorrect notes
    //Within each block: 0 = novice, 1 = advanced, 2 = expert, 3 = GOAT

    const getAchievements = ((stats, firstAchievement) => {
        let achievementArr = []
        for (let i = 0; i < 4; i++) {
            if (stats[i] >= 5) {
                achievementArr.push(firstAchievement + (i * 6))
            }

            if (stats[i] >= 10) {
                achievementArr.push(firstAchievement + 1 + (i * 6))
            }

            if (stats[i] >= 15) {
                achievementArr.push(firstAchievement + 2 + (i * 6))
            }

            if (stats[i] >= 20) {
                achievementArr.push(firstAchievement + 3 + (i * 6))
            }

            if (stats[i] >= 25) {
                achievementArr.push(firstAchievement + 4 + (i * 6))
            }

            if (stats[i] >= 30) {
                achievementArr.push(firstAchievement + 5 + (i * 6))
            }
        }
        return achievementArr
    })

    //Cmaj
    //chromatic
    useEffect(() => {
        const x = getAchievements(statsCMaj, 37)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsCMaj])

    //Sharps
    //Gmaj
    useEffect(() => {
        const x = getAchievements(statsGMaj, 61)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsGMaj])

    //Dmaj
    useEffect(() => {
        const x = getAchievements(statsDMaj, 85)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsDMaj])

    //Amaj
    useEffect(() => {
        const x = getAchievements(statsAMaj, 109)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsAMaj])

    //Emaj
    useEffect(() => {
        const x = getAchievements(statsEMaj, 133)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsEMaj])

    //Bmaj
    useEffect(() => {
        const x = getAchievements(statsBMaj, 157)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsBMaj])

    //F#maj
    useEffect(() => {
        const x = getAchievements(statsFSharpMaj, 181)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsFSharpMaj])

    //C#maj
    useEffect(() => {
        const x = getAchievements(statsCSharpMaj, 205)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsCSharpMaj])

    //Flats
    //Fmaj
    useEffect(() => {
        const x = getAchievements(statsFMaj, 229)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsFMaj])

    //Bbmaj
    useEffect(() => {
        const x = getAchievements(statsBFlatMaj, 253)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsBFlatMaj])

    //Ebmaj
    useEffect(() => {
        const x = getAchievements(statsEFlatMaj, 277)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsEFlatMaj])

    //Abmaj
    useEffect(() => {
        const x = getAchievements(statsAFlatMaj, 301)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsAFlatMaj])

    //Dbmaj
    useEffect(() => {
        const x = getAchievements(statsDFlatMaj, 325)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsDFlatMaj])

    //Gbmaj
    useEffect(() => {
        const x = getAchievements(statsGFlatMaj, 349)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsGFlatMaj])

    //Cbmaj
    useEffect(() => {
        const x = getAchievements(statsCFlatMaj, 373)
        for (let i = 0; i < x.length; i++) {
            unlockAchievement(x[i])
        }
    }, [statsCFlatMaj])

    //Check number of achievements unlocked
    useEffect(() => {
        if (numOfAchievementsUnlocked > 80) {
            unlockAchievement(402)
        }

        if (numOfAchievementsUnlocked > 160) {
            unlockAchievement(403)
        }

        if (numOfAchievementsUnlocked > 242) {
            unlockAchievement(404)
        }

        if (numOfAchievementsUnlocked > 323) {
            unlockAchievement(405)
        }

        if (numOfAchievementsUnlocked >= 405) {
            unlockAchievement(406)
        }
    }, [numOfAchievementsUnlocked])

    //Check total correct notes
    useEffect(() => {
        if (totalCorrectNotes >= 10) {
            unlockAchievement(25)
        }

        if (totalCorrectNotes >= 25) {
            unlockAchievement(26)
        }

        if (totalCorrectNotes >= 50) {
            unlockAchievement(27)
        }

        if (totalCorrectNotes >= 100) {
            unlockAchievement(28)
        }

        if (totalCorrectNotes >= 250) {
            unlockAchievement(29)
        }

        if (totalCorrectNotes >= 500) {
            unlockAchievement(30)
        }

        if (totalCorrectNotes >= 1000) {
            unlockAchievement(31)
        }

        if (totalCorrectNotes >= 314) {
            unlockAchievement(32)
        }

        if (totalCorrectNotes >= 271) {
            unlockAchievement(33)
        }

        if (totalCorrectNotes >= 42) {
            unlockAchievement(34)
        }

        if (totalCorrectNotes >= 247) {
            unlockAchievement(35)
        }

        if (totalCorrectNotes >= 451) {
            unlockAchievement(36)
        }
    }, [totalCorrectNotes])

    return null;
}
 
export default RootAchievements;