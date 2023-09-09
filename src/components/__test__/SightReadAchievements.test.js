import SightReadAchievements from "../SightReadAchievements";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("should unlock achievement based on prevCombo prop", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    let comboList = [1,3,9,15,29]
    let firstAch = 397

    for (let i = 0; i < 5; i++) {
        render(
            <SightReadAchievements prevCombo={comboList[i]}></SightReadAchievements>
        )
        expect(mockdata.unlockAchievement).toBeCalledWith(firstAch + i)
    }
    
    contextSpy.mockRestore()
})