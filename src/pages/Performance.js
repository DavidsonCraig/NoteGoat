import { useEffect, useState } from "react"
import NoteDisplay from "../components/NoteDisplay"
import KeySelector from "../components/KeySelector"
import { useOutletContext } from "react-router"


export default function Performance() {
  const outletContext = useOutletContext()
  const notesDown = useOutletContext.notesDown

  const [MIDINoteDisplay, setMIDINoteDisplay] = useState(60)
  const [keySignature, setKeySignature] = useState("CMaj")

  const handleKeyChange = ((x) => {
    setKeySignature(x)
  })

  return (
    <div className="performance">
      <KeySelector handleKeyChange={handleKeyChange}></KeySelector>
      <NoteDisplay MIDINoteDisplay={MIDINoteDisplay} keySignature={keySignature}></NoteDisplay>
    </div>
    
  )
}