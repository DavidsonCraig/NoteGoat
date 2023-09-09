import DifficultySelector from "../DifficultySelector";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("should have novice difficulty preselected", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {setDifficulty: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <DifficultySelector></DifficultySelector>
    )
    const x = screen.getByText(/Novice/i)
    expect(x).toBeInTheDocument()

    contextSpy.mockRestore()
})

describe("Should be able to change difficulty which changes option and triggers setDifficulty()", () => {
    it("should have be able to change to Novice difficulty", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setDifficulty: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <DifficultySelector></DifficultySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "0"}})
    
        expect(selector.selectedOptions[0].text).toBe("Novice")
        expect(selector.value).toBe("0")
        expect(mockdata.setDifficulty).toHaveBeenCalledWith("0")
    
        contextSpy.mockRestore()
    })

    it("should have be able to change to Advanced difficulty", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setDifficulty: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <DifficultySelector></DifficultySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "1"}})
    
        expect(selector.selectedOptions[0].text).toBe("Advanced")
        expect(selector.value).toBe("1")
        expect(mockdata.setDifficulty).toHaveBeenCalledWith("1")
    
        contextSpy.mockRestore()
    })

    it("should have be able to change to Expert difficulty", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setDifficulty: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <DifficultySelector></DifficultySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "2"}})
    
        expect(selector.selectedOptions[0].text).toBe("Expert")
        expect(selector.value).toBe("2")
        expect(mockdata.setDifficulty).toHaveBeenCalledWith("2")
    
        contextSpy.mockRestore()
    })

    it("should have be able to change to GOAT difficulty", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setDifficulty: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <DifficultySelector></DifficultySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "3"}})
    
        expect(selector.selectedOptions[0].text).toBe("GOAT")
        expect(selector.value).toBe("3")
        expect(mockdata.setDifficulty).toHaveBeenCalledWith("3")
    
        contextSpy.mockRestore()
    })
})