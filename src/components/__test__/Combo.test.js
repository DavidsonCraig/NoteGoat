import Combo from "../Combo";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("should change high score on context prop from root", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {highScoreFacade: 5}
    contextSpy.mockReturnValue(mockdata)
    render(
        <Combo combo={5}></Combo> 
    )
    const x = screen.getByText(/High score: 5/i)
    expect(x).toBeInTheDocument()

    const y = screen.queryByText(/High score: 6/i)
    expect(y).not.toBeInTheDocument()

    contextSpy.mockRestore()
})

it("should change current combo from combo prop", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {highScoreFacade: 5}
    contextSpy.mockReturnValue(mockdata)
    render(
        <Combo combo={5} prevCombo={5}></Combo> 
    )
    const x = screen.getByText(/Combo: 5/i)
    expect(x).toBeInTheDocument()

    const y = screen.queryByText(/Combo: 6/i)
    expect(y).not.toBeInTheDocument()

    contextSpy.mockRestore()
})

it("should change previous combo from combo prop", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {highScoreFacade: 5}
    contextSpy.mockReturnValue(mockdata)
    render(
        <Combo combo={5} prevCombo={5}></Combo> 
    )
    const x = screen.getByText(/Previous score: 5/i)
    expect(x).toBeInTheDocument()

    const y = screen.queryByText(/Previous score: 6/i)
    expect(y).not.toBeInTheDocument()

    contextSpy.mockRestore()
})