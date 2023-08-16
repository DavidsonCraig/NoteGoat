import { useEffect, useState } from "react"
//Chromatic
import CMaj from "../images/keySignatures/CMaj.svg"
//Sharps
import AMaj from "../images/keySignatures/AMaj.svg"
import BMaj from "../images/keySignatures/BMaj.svg"
import CSharpMaj from "../images/keySignatures/CSharpMaj.svg"
import DMaj from "../images/keySignatures/DMaj.svg"
import EMaj from "../images/keySignatures/EMaj.svg"
import FSharpMaj from "../images/keySignatures/FSharpMaj.svg"
import GMaj from "../images/keySignatures/GMaj.svg"
//Flats
import AFlatMaj from "../images/keySignatures/AFlatMaj.svg"
import BFlatMaj from "../images/keySignatures/BFlatMaj.svg"
import CFlatMaj from "../images/keySignatures/CFlatMaj.svg"
import DFlatMaj from "../images/keySignatures/DFlatMaj.svg"
import EFlatMaj from "../images/keySignatures/EFlatMaj.svg"
import FMaj from "../images/keySignatures/FMaj.svg"
import GFlatMaj from "../images/keySignatures/GFlatMaj.svg"

import AllNote from "./AllNote"

const NoteDisplay = (props) => {
    const note = props.note
    const keySignature = props.keySignature

    const [staff, setStaff] = useState(CMaj)
    const [notePosPx, setNotePosPx] = useState(79)
    const [accidental,setAccidental] = useState(" ")
    
    const noteLookUpTable = {
      "CMaj": [' C','^C',' D','^D',' E',' F','^F',' G','^G',' A','^A',' B'],
      "AMin": [' C','^C',' D','^D',' E','F','^F','G','^G','A','^A','B'],
      //Sharp major keys
      "GMaj": [' C','^C',' D','^D',' E','=F',' F',' G','^G',' A','^A',' B'],
      "DMaj": ['=C',' C',' D','^D',' E','=F',' F',' G','^G',' A','^A',' B'],
      "AMaj": ['=C',' C',' D','^D',' E','=F',' F','=G',' G',' A','^A',' B'],
      "EMaj": ['=C',' C','=D',' D',' E','=F',' F','=G',' G',' A','^A',' B'], 
      "BMaj": ['=C',' C','=D',' D',' E','=F',' F','=G',' G','=A',' A',' B'], 
      "FSharpMaj": ['=C',' C','=D',' D','=E',' E',' F','=G',' G','=A',' A',' B'],
      "CSharpMaj": [' b,', ' C','=D',' D','=E',' E',' F','=G',' G','=A',' A','=B'],
      //Flat major keys
      "FMaj": [' C','_D',' D','_E',' E',' F','_G',' G','_A',' A',' B','=B'],
      "BFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G','_A',' A',' B','=B'],
      "EFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G',' A','=A',' B','=B'],
      "AFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G',' A','=A',' B','=B'],
      "DFlatMaj": [' C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B','=B'],
      "GFlatMaj": ['=C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B',' C'],
      "CFlatMaj": ['=C',' D','=D',' E',' F','=F',' G','=G',' A','=A',' B',' C'],
  }

    const calcAdditionalNoteHeight = ((x) => {
      let tmp = 0
      let noteSpace = 13.5
      switch(x) {
        case 'b':
          tmp = 1
          break
        case 'C':
          tmp = 0
          break
        case 'D':
          tmp = -1
          break
        case 'E':
          tmp = -2
          break
        case 'F':
          tmp = -3
          break
        case 'G':
          tmp = -4
          break
        case 'A':
          tmp = -5
          break
        case 'B':
          tmp = -6
          break
      }
      return tmp * noteSpace
    })

    const updateNotePos = ((x) => {
      //First values are exact x positions of the C notes at each octave
      let additionalHeight = calcAdditionalNoteHeight(x)
      switch(Math.floor(note / 12)) {
        case 3:
          setNotePosPx(383 + additionalHeight)
          break
        case 4:
          setNotePosPx(288.5 + additionalHeight)
          break
        case 5:
          setNotePosPx(79 + additionalHeight)
          break
        case 6:
          setNotePosPx(-15.5 + additionalHeight)
          break
        case 7:
          setNotePosPx(-110 + additionalHeight)
          break
      }
    })

    useEffect(() => {
      let n = noteLookUpTable[keySignature][note % 12]
      setAccidental(n[0])
      updateNotePos(n[1])
    }, [keySignature, note])


    //Update key signature
    useEffect(() => {
        const o = {
            //Chromatic
            "CMaj": CMaj,
            //Sharps
            "AMaj": AMaj,
            "BMaj": BMaj,
            "CSharpMaj": CSharpMaj,
            "DMaj": DMaj,
            "EMaj": EMaj,
            "FSharpMaj": FSharpMaj,
            "GMaj": GMaj,
            //Flats
            "FMaj": FMaj,
            "BFlatMaj": BFlatMaj,
            "EFlatMaj": EFlatMaj,
            "AFlatMaj": AFlatMaj,
            "DFlatMaj": DFlatMaj,
            "GFlatMaj": GFlatMaj,
            "CFlatMaj": CFlatMaj,
        }
        setStaff(o[keySignature])
    }, [keySignature])

    
    //Update Note position
    useEffect(() => {
      document.documentElement.style.setProperty('--note-height', `${notePosPx}px`)
    }, [notePosPx])


    return ( 
        <div className="testContainer">
          <div className="testImageContainer">
            <img src={staff} alt="GrandStaff" className="grandStaff"></img>
            {/* <object data={allNote} type="image/svg+xml" className="note" id="note"></object> */}
            <AllNote accidental={accidental} note={note}></AllNote>
          </div>          
        </div>
     );
}
 
export default NoteDisplay;