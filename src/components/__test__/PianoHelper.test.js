import PianoHelper from "../PianoHelper";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

const highlightColor = "rgba(78, 192, 145, 1)"
const defaultColor = "rgba(242, 216, 216, 1)"
const noteDownColor = "rgba(192, 78, 126, 1)"


describe("noteHighlighting", () => {
    it("Note should be highlighted if present in highlighted prop", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[60]} combo={0} showNotes={false}></PianoHelper>
        )
        const highlightedNote = container.querySelector("#mn60")
        const highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(highlightColor)
    
        contextSpy.mockRestore()
    })

    it("Note should not be highlighted if combo is more than 0 and showNotes is false", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[60]} combo={1} showNotes={false}></PianoHelper>
        )
        const highlightedNote = container.querySelector("#mn60")
        const highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(defaultColor)
    
        contextSpy.mockRestore()
    })

    it("Note should not be highlighted if combo is more than 0 and showNotes is false", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[60]} combo={1} showNotes={true}></PianoHelper>
        )
        const highlightedNote = container.querySelector("#mn60")
        const highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(highlightColor)
    
        contextSpy.mockRestore()
    })
    
    it("Note should be not highlighted if not present in highlighted prop", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
        )
        const highlightedNote = container.querySelector("#mn60")
        const highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(defaultColor)
    
        contextSpy.mockRestore()
    })

    it("Note should be colored red if a single note is down", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {60: ""}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
        )
        const highlightedNote = container.querySelector("#mn60")
        const highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(noteDownColor)
    
        contextSpy.mockRestore()
    })    

    it("Multiple notes should be colored red if a multiple notes are down", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {60: "", 61: "", 62: ""}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
        )
        let highlightedNote = container.querySelector("#mn60")
        let highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(noteDownColor)

        highlightedNote = container.querySelector("#mn61")
        highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(noteDownColor)

        highlightedNote = container.querySelector("#mn62")
        highlightedNoteColor = highlightedNote.style._values["background-color"]
        expect(highlightedNoteColor).toBe(noteDownColor)
    
        contextSpy.mockRestore()
    })    
})

describe("Clicking the piano keys", () => {
    it("should trigger noteDown when mouse down on piano key", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
        )
        const pianokey = container.querySelector("#mn60")
        fireEvent.mouseDown(pianokey)
        expect(mockdata.noteOn).toBeCalledWith(60, 100)
    
        contextSpy.mockRestore()
    })

    it("should trigger noteOff when mouse up on piano key", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, noteOn: jest.fn(), noteOff: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        const { container } = render(
            <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
        )

        const pianokey = container.querySelector("#mn60")
        fireEvent.mouseDown(pianokey)
        fireEvent.mouseUp(pianokey)
        expect(mockdata.noteOff).toBeCalledWith(60)
    
        contextSpy.mockRestore()
    })
})