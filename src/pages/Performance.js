import { useEffect } from "react"
import staff from "../images/comp2.svg"
import note from "../images/note.svg"
import note2 from "../images/note2.svg"
import { useState } from "react"


export default function Performance() {
  const [noteImage,setNoteImage] = useState(note2)

  useEffect(() => {
    setNoteImage(note2)
  })  
    return (
      <div className="performance">
        <h1>Performance</h1>
        <div className="testContainer">
          <div className="testSpacer"></div>
          <div className="testImageContainer">
           <img src={staff} alt="GrandStaff" className="grandStaff"></img>
           <div className="noteContainer">
            <img src={noteImage} alt="GrandStaff" className="grandStaff"></img>
          </div>
          </div>
          <div className="testSpacer"></div>
          
        </div>
      </div>
    )
}