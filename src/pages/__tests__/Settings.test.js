import Settings from "../Settings";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"
import { BrowserRouter } from "react-router-dom";

it("should mute piano on first render", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {midiStatus: "mock Status",mutePiano: jest.fn(), systemMute: jest.fn(), unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Settings></Settings>
        </BrowserRouter>
    )

    expect(mockdata.mutePiano.current).toBe(true)
    contextSpy.mockRestore()
})

it("should unlock achievement when mute button is pressed", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {midiStatus: "mock Status",mutePiano: jest.fn(), systemMute: jest.fn(), unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Settings></Settings>
        </BrowserRouter>
    )
    const x = screen.getByText(/Mute/i)
    fireEvent.click(x)
    expect(mockdata.unlockAchievement).toBeCalledWith(11)
    contextSpy.mockRestore()
})

it("should system mute when mute button is pressed", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {midiStatus: "mock Status",mutePiano: jest.fn(), systemMute: jest.fn(), unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Settings></Settings>
        </BrowserRouter>
    )
    const x = screen.getByText(/Mute/i)
    fireEvent.click(x)
    expect(mockdata.systemMute.current).toBe(true)
    contextSpy.mockRestore()
})

it("should system unmute when unmute button is pressed", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {midiStatus: "mock Status",mutePiano: jest.fn(), systemMute: jest.fn(), unlockAchievement: jest.fn()}
    mockdata.systemMute.current = true
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Settings></Settings>
        </BrowserRouter>
    )
    const x = screen.getByText(/Mute/i)
    fireEvent.click(x)
    expect(mockdata.systemMute.current).toBe(false)
    contextSpy.mockRestore()
})

it("should display Midi information", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {midiStatus: "mock Status",mutePiano: jest.fn(), systemMute: jest.fn(), unlockAchievement: jest.fn()}
    mockdata.systemMute.current = true
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Settings></Settings>
        </BrowserRouter>
    )
    const x = screen.getByText(/mock status/i)
    expect(x).toBeInTheDocument()
    contextSpy.mockRestore()
})