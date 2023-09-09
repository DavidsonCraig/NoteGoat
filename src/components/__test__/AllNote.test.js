import AllNote from "../AllNote";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

describe("Should render correct note components", () => {
    it("should display note", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector(".note")
        expect(x).toBeInTheDocument()
    })
    
    it("should display stem Up", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector("#stemUp")
        expect(x).toBeInTheDocument()
    })
    
    it("should display noteBody and be visable", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector("#noteBody")
        expect(x).toBeInTheDocument()
        expect(x).toBeVisible()
    })
    
    it("should display stem Down", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector("#stemDown")
        expect(x).toBeInTheDocument()
    })

    it("should display flat", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector("#flat")
        expect(x).toBeInTheDocument()
    })

    it("should display sharp", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector("#sharp")
        expect(x).toBeInTheDocument()
    })

    it("should display natural", async () => {
        const { container } = render (
            <AllNote></AllNote>
        )
        const x = container.querySelector("#natural")
        expect(x).toBeInTheDocument()
    })
})

describe("Should render correct accidentals given props", () => {
    it("should display no accidentals given prop", async () => {
        const { container } = render (
            <AllNote accidental={""}></AllNote>
        )
        const sharp = container.querySelector("#sharp")
        const flat = container.querySelector("#flat")
        const natural = container.querySelector("#natural")

        expect(sharp.getAttribute("opacity")).toBe("0")
        expect(flat.getAttribute("opacity")).toBe("0")
        expect(natural.getAttribute("opacity")).toBe("0")
    })

    it("should display sharp given sharp prop", async () => {
        const { container } = render (
            <AllNote accidental={"^"}></AllNote>
        )
        const sharp = container.querySelector("#sharp")
        const flat = container.querySelector("#flat")
        const natural = container.querySelector("#natural")

        expect(sharp.getAttribute("opacity")).toBe("1")
        expect(flat.getAttribute("opacity")).toBe("0")
        expect(natural.getAttribute("opacity")).toBe("0")
    })

    it("should display flat given flat prop", async () => {
        const { container } = render (
            <AllNote accidental={"_"}></AllNote>
        )
        const sharp = container.querySelector("#sharp")
        const flat = container.querySelector("#flat")
        const natural = container.querySelector("#natural")

        expect(sharp.getAttribute("opacity")).toBe("0")
        expect(flat.getAttribute("opacity")).toBe("1")
        expect(natural.getAttribute("opacity")).toBe("0")
    })

    it("should display natural given natural prop", async () => {
        const { container } = render (
            <AllNote accidental={"="}></AllNote>
        )
        const sharp = container.querySelector("#sharp")
        const flat = container.querySelector("#flat")
        const natural = container.querySelector("#natural")

        expect(sharp.getAttribute("opacity")).toBe("0")
        expect(flat.getAttribute("opacity")).toBe("0")
        expect(natural.getAttribute("opacity")).toBe("1")
    })
})

describe("Should render the correct note stem given note x position", () => {
    it("should display note stem up at 220 pos x", async () => {
        const { container } = render (
            <AllNote notePosPx={220}></AllNote>
        )
        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        expect(stemUp.getAttribute("opacity")).toBe("1")
        expect(stemDown.getAttribute("opacity")).toBe("0")
    })

    it("should display note stem up at 16 pos x", async () => {
        const { container } = render (
            <AllNote notePosPx={16}></AllNote>
        )
        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        expect(stemUp.getAttribute("opacity")).toBe("1")
        expect(stemDown.getAttribute("opacity")).toBe("0")
    })

    it("should display note stem up at -51 pos x", async () => {
        const { container } = render (
            <AllNote notePosPx={-51}></AllNote>
        )
        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        expect(stemUp.getAttribute("opacity")).toBe("1")
        expect(stemDown.getAttribute("opacity")).toBe("0")
    })

    it("should display note stem down at -52 pos x", async () => {
        const { container } = render (
            <AllNote notePosPx={-52}></AllNote>
        )
        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        expect(stemUp.getAttribute("opacity")).toBe("0")
        expect(stemDown.getAttribute("opacity")).toBe("1")
    })

    it("should display note stem down at 18 pos x", async () => {
        const { container } = render (
            <AllNote notePosPx={18}></AllNote>
        )
        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        expect(stemUp.getAttribute("opacity")).toBe("0")
        expect(stemDown.getAttribute("opacity")).toBe("1")
    })

    it("should display note stem down at 212 pos x", async () => {
        const { container } = render (
            <AllNote notePosPx={212}></AllNote>
        )
        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        expect(stemUp.getAttribute("opacity")).toBe("0")
        expect(stemDown.getAttribute("opacity")).toBe("1")
    })
})

describe("Should render correct note color given the noteColor prop", () => {
    it("should note components as black if given black color prop", async () => {
        const { container } = render (
            <AllNote noteColor={"black"}></AllNote>
        )
        const noteBody = container.querySelector("#noteBody")

        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        const sharp = container.querySelector("#sharp")
        const flat = container.querySelector("#flat")
        const natural = container.querySelector("#natural")

        expect(noteBody.getAttribute("fill")).toBe("black")
        expect(stemUp.getAttribute("fill")).toBe("black")
        expect(stemDown.getAttribute("fill")).toBe("black")
        expect(sharp.getAttribute("fill")).toBe("black")
        expect(flat.getAttribute("fill")).toBe("black")
        expect(natural.getAttribute("fill")).toBe("black")
    })

    it("should note components as red if given red color prop", async () => {
        const { container } = render (
            <AllNote noteColor={"red"}></AllNote>
        )
        const noteBody = container.querySelector("#noteBody")

        const stemUp = container.querySelector("#stemUp")
        const stemDown = container.querySelector("#stemDown")

        const sharp = container.querySelector("#sharp")
        const flat = container.querySelector("#flat")
        const natural = container.querySelector("#natural")

        expect(noteBody.getAttribute("fill")).toBe("red")
        expect(stemUp.getAttribute("fill")).toBe("red")
        expect(stemDown.getAttribute("fill")).toBe("red")
        expect(sharp.getAttribute("fill")).toBe("red")
        expect(flat.getAttribute("fill")).toBe("red")
        expect(natural.getAttribute("fill")).toBe("red")
    })
})