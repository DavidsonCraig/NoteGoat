import abcjs from "abcjs";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import { useOutletContext } from "react-router";
import {transformSingleMIDI} from "../functions/transformSingleMIDI"

export default function SingleNote(props) {
  let note = props.note
  let keySignature = props.keySignature
  let prevNote = useRef(0)
  let outletContext = useOutletContext()
  let notesDown = outletContext.notesDown
  //render
  useEffect(() => {
    abcjs.renderAbc("paper", `K: ${keySignature}\n` + transformSingleMIDI(note,keySignature), { 
      add_classes: true, 
      scale: 5,
     });
  }, [note,keySignature])
  
  useEffect(() => {
    let l = Object.keys(notesDown).length
    let x = document.querySelector(".abcjs-note[data-index='0']")

    //Fill note logic
    if (((note in notesDown && l == 1 && prevNote.current == 0) || (l == 0)) && x.classList.contains("filled")) {
      x.classList.remove("filled")
    } else if (l > 0) {
      x.classList.add("filled")
    } 

    //Shake note logic
    if (prevNote.current == 0 && !(note in notesDown)) {
      handleButtonClick()
    }

    prevNote.current = l
  }, [notesDown])
 
  const handleButtonClick = () => {
    anime({
      targets: ".abcjs-note[data-index='0']",
      translateX: [
        { value: -3, duration: 50 },
        { value: 3, duration: 50 },
        { value: -3, duration: 50 },
        { value: 3, duration: 50 },
        { value: 0, duration: 50 },
      ],
      easing: 'easeInSine',
    })
  }

  return (
    <div className="singleNote">
      <div id="spacer"></div>
      <div id="paper"></div>
      <div id="space"></div>
    </div>
  )
}