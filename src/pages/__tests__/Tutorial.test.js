import Tutorial from "../Tutorial";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"
import { BrowserRouter } from "react-router-dom";

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