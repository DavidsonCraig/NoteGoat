import FreeplayAchievements from "../FreeplayAchievements";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

//Midi notes
//A = 57
//B = 59
//C = 60
//D = 62
//E = 64
//F = 65
//G = 67

const note = ((x) => {
    switch(x) {
        case "A":
            return {57: ""}
        case "B":
            return {59: ""}
        case "C":
            return {60: ""}
        case "D":
            return {62: ""}
        case "E":
            return {64: ""}
        case "F":
            return {65: ""}
        case "G":
            return {67: ""}
    }
})

describe("Should unlock achievements when words are spelled through noteDown prop", () => {
    it("Achievement 16 test: Spell BAD", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("B")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("A")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("D")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(16)
        
        contextSpy.mockRestore()
    })

    it("Achievement 17 test: Spell BED", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("B")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("D")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(17)
        
        contextSpy.mockRestore()
    })

    it("Achievement 18 test: Spell CAB", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("C")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("A")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("B")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(18)
        
        contextSpy.mockRestore()
    })

    it("Achievement 19 test: Spell BEE", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("B")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(19)
        
        contextSpy.mockRestore()
    })

    it("Achievement 20 test: Spell BAD", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("D")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("A")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("B")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(20)
        
        contextSpy.mockRestore()
    })

    it("Achievement 21 test: Spell ACE", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("A")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("C")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(21)
        
        contextSpy.mockRestore()
    })

    it("Achievement 22 test: Spell DEAD", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("D")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("A")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )

        mockdata.notesDown = note("D")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(22)
        
        contextSpy.mockRestore()
    })

    it("Achievement 23 test: Spell FED", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("F")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("D")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(23)
        
        contextSpy.mockRestore()
    })
    
    it("Achievement 24 test: Spell CAFE", async () => {

        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {notesDown: {}, unlockAchievement: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
    
        mockdata.notesDown = note("C")
        const {rerender} = render(
            <FreeplayAchievements></FreeplayAchievements>
        )
        mockdata.notesDown = note("A")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        mockdata.notesDown = note("F")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )

        mockdata.notesDown = note("E")
        rerender(
            <FreeplayAchievements></FreeplayAchievements>
        )
    
        expect(mockdata.unlockAchievement).toBeCalledWith(24)
        
        contextSpy.mockRestore()
    })
})


