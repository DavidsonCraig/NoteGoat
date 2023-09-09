import Timer from "../Timer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as rr from "react-router"

it("should reset combo after time has ran out", async () => {
    const resetCombo = jest.fn()
    render (
        <Timer combo={10} resetCombo={resetCombo} comboTime={50}></Timer>
    )
    
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(resetCombo).toBeCalled()
})

it("should not reset combo before time has ran out", async () => {
    const resetCombo = jest.fn()
    render (
        <Timer combo={10} resetCombo={resetCombo} comboTime={3000}></Timer>
    )
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(resetCombo).not.toBeCalled()
})

it("should not reset combo if combo is already 0", async () => {
    const resetCombo = jest.fn()
    render (
        <Timer combo={0} resetCombo={resetCombo} comboTime={50}></Timer>
    )
    
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(resetCombo).not.toBeCalled()
})