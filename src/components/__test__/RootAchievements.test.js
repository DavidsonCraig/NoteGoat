import RootAchievements from "../RootAchievements";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

//Stats for each key signature
    //Three blocks of four (Due to shallow comparison of react)
    //Block 1 = High score
    //Block 2 = Total correct notes
    //Block 3 = Total incorrect notes
    //Within each block: 0 = novice, 1 = advanced, 2 = expert, 3 = GOAT


describe("Should unlock achievements based on combo, difficulty and key Signature", () => {
    it("Should unlock achievements for CMaj", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 37
            const { container } = render(
                <RootAchievements
                    statsCMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for GMaj", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 61
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for DMaj", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 85
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for AMaj", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 109
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for EMaj", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 133
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for BMaj", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 157
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for F Sharp Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 181
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for C Sharp Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 205
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for F Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 229
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for B Flat Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 253
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for E Flat Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 277
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for A Flat Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 301
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for D Flat Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 325
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for G Flat Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 349
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })

    it("Should unlock achievements for C Flat Major", async () => {
        const unlockAchievement = jest.fn()
        for (let i = 0; i < 6; i++) {
            let combo = (i + 1) * 5
            let firstAchievement = 373
            const { container } = render(
                <RootAchievements
                    statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                    statsCFlatMaj={[combo,combo,combo,combo,0,0,0,0,0,0,0,0]}
        
                    totalCorrectNotes={0}
                    unlockAchievement={unlockAchievement}
                    numOfAchievementsUnlocked={0}
                ></RootAchievements>
            )
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 6)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 12)
            expect(unlockAchievement).toBeCalledWith(firstAchievement + i + 18)
        }
    })
})


it("Should unlock achievements based of number of achievments already unlocked", async () => {
    const unlockAchievement = jest.fn()
    for (let i = 0; i < 4; i++) {
        let fifthOfAchievements = 81
        let achUnlocked = (i + 1) * fifthOfAchievements
        let firstAchievement = 402
        const { container } = render(
            <RootAchievements
                statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
    
                totalCorrectNotes={0}
                unlockAchievement={unlockAchievement}
                numOfAchievementsUnlocked={achUnlocked}
            ></RootAchievements>
        )
        expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
    }
})

it("Should unlock achievements based number of total correct notes", async () => {
    const unlockAchievement = jest.fn()
    for (let i = 0; i < 12; i++) {
        let totalCorrectNotes = [10,25,50,100,250,500,1000,314,271,42,247,451]
        let firstAchievement = 25
        const { container } = render(
            <RootAchievements
                statsCMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsGMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsDMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsAMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsEMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsBMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsFSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsCSharpMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsFMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsBFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsEFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsAFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsDFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsGFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
                statsCFlatMaj={[0,0,0,0,0,0,0,0,0,0,0,0]}
    
                totalCorrectNotes={totalCorrectNotes[i]}
                unlockAchievement={unlockAchievement}
                numOfAchievementsUnlocked={0}
            ></RootAchievements>
        )
        expect(unlockAchievement).toBeCalledWith(firstAchievement + i)
    }
})