import ExtraLines from "../ExtraLines";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("Should render all extra lines", async () => {
    const { container } = render (
        <ExtraLines notePosPx={16.5}></ExtraLines>
    )
    const extraLineTreble5 = container.querySelector("#extraLineTreble5")
    const extraLineTreble4 = container.querySelector("#extraLineTreble4")
    const extraLineTreble3 = container.querySelector("#extraLineTreble3")
    const extraLineTreble2 = container.querySelector("#extraLineTreble2")
    const extraLineTreble1 = container.querySelector("#extraLineTreble1")
    const extraLineBass1 = container.querySelector("#extraLineBass1")
    const extraLineBass2 = container.querySelector("#extraLineBass2")
    const extraLineMiddleC = container.querySelector("#extraLineMiddleC")

    expect(extraLineTreble5).toBeInTheDocument()
    expect(extraLineTreble4).toBeInTheDocument()
    expect(extraLineTreble3).toBeInTheDocument()
    expect(extraLineTreble2).toBeInTheDocument()
    expect(extraLineTreble1).toBeInTheDocument()
    expect(extraLineBass1).toBeInTheDocument()
    expect(extraLineBass2).toBeInTheDocument()
    expect(extraLineMiddleC).toBeInTheDocument()

})

describe("Should render correct lines at specific notePosPx", () => {
    it("Should render no visable lines at 20 notePosPx", async () => {
        const { container } = render (
            <ExtraLines notePosPx={20}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render the middle C line at notePosPx of 16.5", async () => {
        const { container } = render (
            <ExtraLines notePosPx={16.5}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("1")
    })

    it("should render a single treble line at notePosPx of -146", async () => {
        const { container } = render (
            <ExtraLines notePosPx={-146}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render double treble line at notePosPx of -173", async () => {
        const { container } = render (
            <ExtraLines notePosPx={-173}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render three treble lines at notePosPx of -200", async () => {
        const { container } = render (
            <ExtraLines notePosPx={-200}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render four treble lines at notePosPx of -227", async () => {
        const { container } = render (
            <ExtraLines notePosPx={-227}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render five treble lines at notePosPx of -254", async () => {
        const { container } = render (
            <ExtraLines notePosPx={-254}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("1")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render single bass line at notePosPx of 293", async () => {
        const { container } = render (
            <ExtraLines notePosPx={293}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass2.getAttribute("opacity")).toBe("0")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })

    it("should render souble bass line at notePosPx of 320", async () => {
        const { container } = render (
            <ExtraLines notePosPx={320}></ExtraLines>
        )
        const extraLineTreble5 = container.querySelector("#extraLineTreble5")
        const extraLineTreble4 = container.querySelector("#extraLineTreble4")
        const extraLineTreble3 = container.querySelector("#extraLineTreble3")
        const extraLineTreble2 = container.querySelector("#extraLineTreble2")
        const extraLineTreble1 = container.querySelector("#extraLineTreble1")
        const extraLineBass1 = container.querySelector("#extraLineBass1")
        const extraLineBass2 = container.querySelector("#extraLineBass2")
        const extraLineMiddleC = container.querySelector("#extraLineMiddleC")
    
        expect(extraLineTreble5.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble4.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble3.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble2.getAttribute("opacity")).toBe("0")
        expect(extraLineTreble1.getAttribute("opacity")).toBe("0")
        expect(extraLineBass1.getAttribute("opacity")).toBe("1")
        expect(extraLineBass2.getAttribute("opacity")).toBe("1")
        expect(extraLineMiddleC.getAttribute("opacity")).toBe("0")
    })


})
