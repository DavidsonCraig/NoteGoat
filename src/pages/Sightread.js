import { set } from "animejs"
import SingleNote from "../components/SingleNote"
import { useEffect, useMemo, useRef, useState } from "react"
import { useOutletContext } from "react-router"
import KeySelector from "../components/KeySelector"
import * as Tone from "tone"


export default function Sightread() {
  let outletContext = useOutletContext()
  let notesDown = outletContext.notesDown
  const toggleMute = outletContext.toggleMute

  const [note, setNote] = useState(60)
  const [keySignature, setKeySignature] = useState("Cmaj")
  const [combo, setCombo] = useState(0)
  const [highestCombo, setHighestCombo] = useState(0)
  
  const prevNote = useRef(0);

  const rewardSFX =  useMemo(() => {
    // const x = new Tone.Synth().toDestination()
    const x = new Tone.Synth().toDestination()
    console.log("ReRender")
    return x
  }, [])

  useEffect(() => {
    let l = Object.keys(notesDown).length
    if (note in notesDown && l == 1 && prevNote.current == 0) {
      setNote(Math.floor(Math.random() * 12) + 60)
      setCombo(combo + 1)
      rewardSFX.triggerAttackRelease(Tone.Frequency(Math.min(30 + combo, 60), "midi"), "16n");
    } else if (l > 0) {
      setCombo(0)
    }

    if (combo > highestCombo) {
      setHighestCombo(combo)
    }

    prevNote.current = l
  }, [notesDown])

  

  const handleKeyChange = (x) => {
    setKeySignature(x)
  }

  return (
    <div className="sightread">
      <SingleNote note={note} keySignature={keySignature}></SingleNote>
      <KeySelector handleKeyChange={handleKeyChange}></KeySelector>
      <h1>Combo: {combo}</h1>
      <h1>Highest Combo: {highestCombo}</h1>
      <button onClick={toggleMute}>Mute</button>
    </div>
  )
}