import { useEffect, useMemo, useRef, useState } from "react"
import { useOutletContext } from "react-router"
import KeySelector from "../components/KeySelector"
import * as Tone from "tone"
import Timer from "../components/Timer"
import PianoHelper from "../components/PianoHelper"
import DifficultySelector from "../components/DifficultySelector"
import NoteDisplay from "../components/NoteDisplay"
import Combo from "../components/Combo"
import BackButton from "../components/BackButton"

export default function SightRead() {
  let outletContext = useOutletContext()
  let notesDown = outletContext.notesDown
  const mute = outletContext.mute
  const unmute = outletContext.unmute

  const [note, setNote] = useState(60)
  const [keySignature, setKeySignature] = useState("CMaj")
  const [combo, setCombo] = useState(0)
  const [highestCombo, setHighestCombo] = useState(0)
  const [showNotes, setshowNotes] = useState(true)
  const [difficulty, setDifficulty] = useState("novice")
  const prevNote = useRef(0);

  //Reward sound effect setup
  const rewardSFX =  useMemo(() => {
    mute()
    const x = new Tone.Sampler({
        urls: {
          "C6": "bottlecap_1.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/berklee/",
    }).toDestination()
    x.volume.value = 0
    console.log("ReRender")
    return x
  }, [])

  const pickNote = (() => {
    switch(difficulty) {
      case "novice":
        setNote(Math.floor(Math.random() * 12) + 60)
        // setNote(95)
        break
      case "advanced":
        setNote(Math.floor(Math.random() * 24) + 48)
        break
      case "expert":
        setNote(Math.floor(Math.random() * 36) + 48)
        break
      case "goat":
        setNote(Math.floor(Math.random() * 59) + 36)
        break
    }
  })

  useEffect(() => {
    let l = Object.keys(notesDown).length
    if (note in notesDown && l == 1 && prevNote.current == 0) {
      pickNote()
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

  const resetCombo = (() => {
    setCombo(0)
  })

  useEffect(() => {
    pickNote()
  },[difficulty])

  return (
    <div className="sightRead">
      <BackButton></BackButton>
      <NoteDisplay note={note} keySignature={keySignature}></NoteDisplay>
      <Combo combo={combo} highestCombo={highestCombo}></Combo>
      <Timer comboTime={3000} combo={combo} resetCombo={resetCombo}></Timer>
      <PianoHelper noteOn={[note]} combo={combo} showNotes={showNotes}></PianoHelper>
      <div className="optionContainer">
        <KeySelector handleKeyChange={handleKeyChange}></KeySelector>
        <DifficultySelector setDifficulty={setDifficulty}></DifficultySelector>
      </div>
    </div>
  )
}