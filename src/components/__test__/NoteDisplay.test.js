import NoteDisplay from "../NoteDisplay";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"


describe("Should render child components", () => {
    it("Should render AllNote", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, keySignature: "CMaj"}
        contextSpy.mockReturnValue(mockdata)
        const { container } = render(
            <NoteDisplay note={60}></NoteDisplay>
        )
        const note = container.querySelector("#note")
        expect(note).toBeInTheDocument()
        contextSpy.mockRestore()
    })

    it("Should render ExtraLines", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, keySignature: "CMaj"}
        contextSpy.mockReturnValue(mockdata)
        const { container } = render(
            <NoteDisplay note={60}></NoteDisplay>
        )
        const extraLines = container.querySelector(".extraLinesContainer")
        expect(extraLines).toBeInTheDocument()
        contextSpy.mockRestore()
    })

    it("Should render GrandStaff", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, keySignature: "CMaj"}
        contextSpy.mockReturnValue(mockdata)
        const { container } = render(
            <NoteDisplay note={60}></NoteDisplay>
        )
        const grandStaff = container.querySelector(".grandStaff")
        expect(grandStaff).toBeInTheDocument()
        contextSpy.mockRestore()
    })
})

it("Should change color of note if wrong", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {notesDown: {61: ""}, keySignature: "CMaj"}
    contextSpy.mockReturnValue(mockdata)

    const { container } = render(
        <NoteDisplay note={60}></NoteDisplay>
    )

    const note = container.querySelector("#noteBody")
    expect(note.getAttribute("fill")).toBe("red")
    contextSpy.mockRestore()
})

