import Tutorial from "../Tutorial";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"
import { BrowserRouter } from "react-router-dom";
import tutorialText from "../../text/TutorialText";
import tutorialChallengesText from "../../text/TutorialChallengesText";
import tutorialTitles from "../../text/TutorialTitles";

it("should unmute piano on first render", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),notesDown: {}, keySignature: "CMaj"}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Tutorial></Tutorial>
        </BrowserRouter>
    )

    expect(mockdata.mutePiano.current).toBe(false)
    contextSpy.mockRestore()
})


it("Pressing ok should close modal", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),notesDown: {}, keySignature: "CMaj"}
    contextSpy.mockReturnValue(mockdata)
    const {container} = render(
        <BrowserRouter>
            <Tutorial></Tutorial>
        </BrowserRouter>
    )
    const ok = container.querySelector(".tutorialModalOkButton")
    fireEvent.click(ok)

    const modal = container.querySelector(".tutorialModalOuterContainer")
    expect(modal).not.toBeVisible()
    contextSpy.mockRestore()
})

it("Pressing help should open modal", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),notesDown: {}, keySignature: "CMaj"}
    contextSpy.mockReturnValue(mockdata)
    const {container} = render(
        <BrowserRouter>
            <Tutorial></Tutorial>
        </BrowserRouter>
    )
    const ok = container.querySelector(".tutorialModalOkButton")
    fireEvent.click(ok)

    const help = container.querySelector(".tutorialHelpButton")
    fireEvent.click(help)

    const modal = container.querySelector(".tutorialModalOuterContainer")
    expect(modal).toBeVisible()

    contextSpy.mockRestore()
})

it("should display correct Title in modal", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),notesDown: {}, keySignature: "CMaj"}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Tutorial></Tutorial>
        </BrowserRouter>
    )
    const title = screen.getByText(tutorialTitles[0])
    expect(title).toBeInTheDocument()
    contextSpy.mockRestore()
})

it("should display correct challenge text", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(),notesDown: {}, keySignature: "CMaj"}
    contextSpy.mockReturnValue(mockdata)
    render(
        <BrowserRouter>
            <Tutorial></Tutorial>
        </BrowserRouter>
    )
    const text = screen.getByText(tutorialChallengesText[0])
    expect(text).toBeInTheDocument()
    contextSpy.mockRestore()
})