import Main from "../Main";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"
import { BrowserRouter } from "react-router-dom";
import mockImageStore from "../__mocks__/MockImageStore";

describe("Should render menu options", () => {
    it("should navigate to tutorial when tutorial option is pressed", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Tutorial/i)
        fireEvent.click(x)
        expect(window.location.pathname).toBe("/NoteGoat/tutorial")
        contextSpy.mockRestore()
    })

    it("should navigate to sightread when sightread option is pressed", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Arcade/i)
        fireEvent.click(x)
        expect(window.location.pathname).toBe("/NoteGoat/sightread")
        contextSpy.mockRestore()
    })

    it("should navigate to freeplay when freeplay option is pressed", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Freeplay/i)
        fireEvent.click(x)
        expect(window.location.pathname).toBe("/NoteGoat/freeplay")
        contextSpy.mockRestore()
    })

    it("should navigate to achievements when achievements option is pressed", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Achievements/i)
        fireEvent.click(x)
        expect(window.location.pathname).toBe("/NoteGoat/achievements")
        contextSpy.mockRestore()
    })

    it("should navigate to settings when settings option is pressed", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Settings/i)
        fireEvent.click(x)
        expect(window.location.pathname).toBe("/NoteGoat/settings")
        contextSpy.mockRestore()
    })
})

it("should mute piano on first render", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
    contextSpy.mockReturnValue(mockdata)
    render(
        <rr.MemoryRouter>
            <Main></Main>
        </rr.MemoryRouter>
    )
    expect(mockdata.mutePiano.current).toBe(true)
    contextSpy.mockRestore()
})

describe("Should unlock achievements through navigation", () => {
    it("should unlock an achievement when navigating to the tutorial", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Tutorial/i)
        fireEvent.click(x)
        expect(mockdata.unlockAchievement).toBeCalledWith(1)
        contextSpy.mockRestore()
    })

    it("should unlock an achievement when navigating to freeplay", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Freeplay/i)
        fireEvent.click(x)
        expect(mockdata.unlockAchievement).toBeCalledWith(12)
        contextSpy.mockRestore()
    })

    it("should unlock an achievement when navigating to achievements", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Achievements/i)
        fireEvent.click(x)
        expect(mockdata.unlockAchievement).toBeCalledWith(15)
        contextSpy.mockRestore()
    })

    it("should unlock an achievement when navigating to the settings", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), unlockAchievement: jest.fn(), imageStore: mockImageStore}
        contextSpy.mockReturnValue(mockdata)
        render(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
        const x = screen.getByText(/Settings/i)
        fireEvent.click(x)
        expect(mockdata.unlockAchievement).toBeCalledWith(13)
        contextSpy.mockRestore()
    })
})
