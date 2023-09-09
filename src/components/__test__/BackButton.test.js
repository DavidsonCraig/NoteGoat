import BackButton from "../BackButton";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"
import { BrowserRouter } from "react-router-dom";

it("should display 'back' text", async () => {
    render(
        <rr.MemoryRouter>
            <BackButton></BackButton> 
        </rr.MemoryRouter>
    )
    const x = screen.getByText(/Back/i)
    expect(x).toBeInTheDocument()
})

it("should change to correct url when clicked", async () => {
    render(
        <BrowserRouter>
            <BackButton></BackButton> 
        </BrowserRouter>
    )
    const x = screen.getByText(/Back/i)
    fireEvent.click(x)
    expect(window.location.pathname).toBe("/NoteGoat/main")
})