import KeySelector from "../KeySelector";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("Selector should have CMaj preselected", async () => {
    const contextSpy = jest.spyOn(rr, "useOutletContext")
    let mockdata = {setKeySignature: jest.fn()}
    contextSpy.mockReturnValue(mockdata)
    render(
        <KeySelector></KeySelector>
    )
    const selector = screen.getByRole("combobox")
    expect(selector.selectedOptions[0].text).toBe("Cmaj/Amin")
    expect(selector).toBeInTheDocument()

    contextSpy.mockRestore()
})

describe("Should be able to change difficulty which changes option and triggers setDifficulty()", () => {
    it("should have be able to change to CMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "CMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Cmaj/Amin")
        expect(selector.value).toBe("CMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("CMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to GMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "GMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Gmaj/Emin")
        expect(selector.value).toBe("GMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("GMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to DMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "DMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Dmaj/Bmin")
        expect(selector.value).toBe("DMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("DMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to AMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "AMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Amaj/F#min")
        expect(selector.value).toBe("AMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("AMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to EMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "EMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Emaj/C#min")
        expect(selector.value).toBe("EMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("EMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to BMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "BMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Bmaj/G#min")
        expect(selector.value).toBe("BMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("BMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to FSharpMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "FSharpMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("F#maj/D#min")
        expect(selector.value).toBe("FSharpMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("FSharpMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to CSharpMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "CSharpMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("C#maj/A#min")
        expect(selector.value).toBe("CSharpMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("CSharpMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to FMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "FMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Fmaj/Dmin")
        expect(selector.value).toBe("FMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("FMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to BFlatMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "BFlatMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Bbmaj/Gmin")
        expect(selector.value).toBe("BFlatMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("BFlatMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to EFlatMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "EFlatMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Ebmaj/Cmin")
        expect(selector.value).toBe("EFlatMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("EFlatMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to AFlatMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "AFlatMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Abmaj/Fmin")
        expect(selector.value).toBe("AFlatMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("AFlatMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to DFlatMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "DFlatMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Dbmaj/Bbmin")
        expect(selector.value).toBe("DFlatMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("DFlatMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to GFlatMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "GFlatMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Gbmaj/Ebmin")
        expect(selector.value).toBe("GFlatMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("GFlatMaj")
    
        contextSpy.mockRestore()
    })

    it("should be able to change the key signature to CFlatMaj", async () => {
        const contextSpy = jest.spyOn(rr, "useOutletContext")
        let mockdata = {setKeySignature: jest.fn()}
        contextSpy.mockReturnValue(mockdata)
        render(
            <KeySelector></KeySelector>
        )
        const selector = screen.getByRole("combobox")
        fireEvent.change(selector, {target: {value: "CFlatMaj"}})
    
        expect(selector.selectedOptions[0].text).toBe("Cbmaj/Abmin")
        expect(selector.value).toBe("CFlatMaj")
        expect(mockdata.setKeySignature).toHaveBeenCalledWith("CFlatMaj")
    
        contextSpy.mockRestore()
    })
})