import abcjs from "abcjs";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import { useOutletContext } from "react-router";
import {transformSingleMIDI} from "../functions/transformSingleMIDI"

export default function SingleNote(props) {
  let note = props.note
  let keySignature = props.keySignature

  let prevNote = useRef(0)
  const [trebleNote, setTrebleNote] = useState("C")
  const [bassNote, setBassNote] = useState("")

  let outletContext = useOutletContext()
  let notesDown = outletContext.notesDown
  // Note handling
  useEffect(() => {
    let x = transformSingleMIDI(note,keySignature)
    if (note >= 60) {
      setBassNote("")
      setTrebleNote(x)
    } else {
      setBassNote(x)
      setTrebleNote("")
    }
  },[note,keySignature])

  // render
  useEffect(() => {
    abcjs.renderAbc(
      "paper", 
      `K: ${keySignature}\n` + 
      `%%staves {(RH) (LH)}
      V:RH clef=treble
      V:LH clef=bass
      V: RH
      L: 1/4
      ${trebleNote}
      V: LH
      ${bassNote}` 
      , { 
      add_classes: true, 
      responsive: "resize",
      selectionColor: "#000000", 
      paddingtop: 0,
      paddingbottom: 0,
      paddingleft: 210,
      paddingright: 0,
      viewportHorizontal: true,
     });
     document.querySelectorAll(".abcjs-bar").forEach(element => element.classList.add("invisible"))
  }, [trebleNote,keySignature])
  
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
      <div id="paper"></div>
      <div className="test"></div>
    </div>
  )
}