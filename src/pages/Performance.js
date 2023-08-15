import { useEffect } from "react"
import staff from "../images/ASharpMin.svg"
import note from "../images/note.svg"
import note2 from "../images/noteStemUp.svg"
import { useState } from "react"


export default function Performance() {
  const [noteImage,setNoteImage] = useState(note2)

  useEffect(() => {
    setNoteImage(note2)
  })  
    return (
      <div className="performance">
        <div className="testContainer">
          <div className="testImageContainer">
            <img src={staff} alt="GrandStaff" className="grandStaff"></img>
            <img src={noteImage} alt="Note" className="note"></img>
          </div>          
        </div>
      </div>
    )
}