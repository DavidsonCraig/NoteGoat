import Achievements from "../Achievements";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

import achievementsSource from "../../text/AchievementsSource";

it("Should render all 407 achievements", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {achievements: achievementsSource}
    contextSpy.mockReturnValue(mockdata)
    const {container} = render(
        <rr.MemoryRouter>
            <Achievements></Achievements>
        </rr.MemoryRouter>
    )
    const x = container.querySelectorAll(".achievementName")
    expect(x.length).toBe(407)

    const y = container.querySelectorAll(".achievementSubtext")
    expect(y.length).toBe(407)

    contextSpy.mockRestore()
})

it("Should color completed achievements green", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")

    let modifiedAchievements = achievementsSource

    for (let i = 0; i < 407; i++) {
        modifiedAchievements[i][1] = "unlocked"
    }

    let mockdata = {achievements: modifiedAchievements}
    contextSpy.mockReturnValue(mockdata)
    const {container} = render(
        <rr.MemoryRouter>
            <Achievements></Achievements>
        </rr.MemoryRouter>
    )
    const x = container.querySelectorAll(".unlocked")
    expect(x.length).toBe(407)
    contextSpy.mockRestore()
})