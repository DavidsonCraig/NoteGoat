import Freeplay from "../Freeplay";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("should unmute piano on first render", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {mutePiano: jest.fn(), notesDown:{}}
    contextSpy.mockReturnValue(mockdata)
    const {container} = render(
        <rr.MemoryRouter>
            <Freeplay></Freeplay>
        </rr.MemoryRouter>
    )
    
    expect(mockdata.mutePiano.current).toBe(false)
    contextSpy.mockRestore()
})

describe("Should render child components", () => {
    it("should render back button", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), notesDown:{}}
        contextSpy.mockReturnValue(mockdata)
        const {container} = render(
            <rr.MemoryRouter>
                <Freeplay></Freeplay>
            </rr.MemoryRouter>
        )
        const x = container.querySelector(".backButton")
        expect(x).toBeInTheDocument()
        contextSpy.mockRestore()
    })

    it("should render Piano helper", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {mutePiano: jest.fn(), notesDown:{}}
        contextSpy.mockReturnValue(mockdata)
        const {container} = render(
            <rr.MemoryRouter>
                <Freeplay></Freeplay>
            </rr.MemoryRouter>
        )
        const x = container.querySelector(".pianoHelperContainer")
        expect(x).toBeInTheDocument()
        contextSpy.mockRestore()
    })
})
