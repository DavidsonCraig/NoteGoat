import Splash from "../Splash";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"
import { BrowserRouter } from "react-router-dom";

it("should mute piano on first render", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Splash></Splash>
        </BrowserRouter>
    )

    expect(mockdata.mutePiano.current).toBe(true)
    contextSpy.mockRestore()
})


it("should navigate to main page when clicked", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),unlockAchievement: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Splash></Splash>
        </BrowserRouter>
    )
    const x = screen.getByText(/Start/i)
    fireEvent.click(x)
    expect(window.location.pathname).toBe("/main")
    contextSpy.mockRestore()
})
