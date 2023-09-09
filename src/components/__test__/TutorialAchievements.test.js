import TutorialAchievements from "../TutorialAchievements";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("Should unlock achievement when tutorial is complete", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <TutorialAchievements combo={0} tutorialStep={29}></TutorialAchievements>
    )
    expect(mockdata.unlockAchievement).toBeCalledWith(10)
    contextSpy.mockRestore()
})

it("Should unlock achievements when playing first correct notes", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    const tutorialSteps = [0,1,3,5,7,9,11,13]
    const tutorialAchievements = [4,5,6,7,8,2,3,9]
    for (let i = 0; i < 8; i++) {
        render(
            <TutorialAchievements combo={1} tutorialStep={tutorialSteps[i]}></TutorialAchievements>
        )
        expect(mockdata.unlockAchievement).toBeCalledWith(tutorialAchievements[i])
    }
    
    contextSpy.mockRestore()
})

it("Should not unlock achievements when at correct tutotorial step with no combo", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    const tutorialSteps = [0,1,3,5,7,9,11,13]
    const tutorialAchievements = [4,5,6,7,8,2,3,9]
    for (let i = 0; i < 8; i++) {
        render(
            <TutorialAchievements combo={0} tutorialStep={tutorialSteps[i]}></TutorialAchievements>
        )
        expect(mockdata.unlockAchievement).not.toBeCalledWith(tutorialAchievements[i])
    }
    
    contextSpy.mockRestore()
})