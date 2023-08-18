import { useEffect, useState, useRef } from "react"
import { useOutletContext } from "react-router"
import anime from "animejs";

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
import ExtraLines from "./ExtraLines";

const NoteDisplay = (props) => {
    const note = props.note
    const keySignature = props.keySignature

    const [staff, setStaff] = useState(CMaj)
    const [notePosPx, setNotePosPx] = useState(79)
    const [accidental,setAccidental] = useState(" ")
    const [noteColor, setNoteColor] = useState("#000")

    const outletContext = useOutletContext()
    const notesDown = outletContext.notesDown

    let prevNote = useRef(0)
    
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
      "GFlatMaj": ['=C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B',' c'],
      "CFlatMaj": ['=C',' D','=D',' E',' F','=F',' G','=G',' A','=A',' B',' c'],
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
        case 'c':
          tmp = -7
          break
      }
      return tmp * noteSpace
    })

    const updateNotePos = ((x) => {
      //First values are exact x positions of the C notes at each octave
      let additionalHeight = calcAdditionalNoteHeight(x)
      switch(Math.floor(note / 12)) {
        case 3:
          setNotePosPx(320 + additionalHeight)
          break
        case 4:
          setNotePosPx(225.5 + additionalHeight)
          break
        case 5:
          setNotePosPx(16.5 + additionalHeight)
          break
        case 6:
          setNotePosPx(-78 + additionalHeight)
          break
        case 7:
          setNotePosPx(-172.5 + additionalHeight)
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

    //Animaation handling
    useEffect(() => {
      let l = Object.keys(notesDown).length
  
      //Fill note logic
      if ((note in notesDown && l == 1 && prevNote.current == 0) || ((l == 0) && noteColor == "red")) {
        setNoteColor("black")
      } else if (l > 0) {
        setNoteColor("red")
      } 
  
      //Shake note logic
      if (prevNote.current == 0 && !(note in notesDown)) {
        shakeNote()
      }
  
      prevNote.current = l
    }, [notesDown])
   
    const shakeNote = () => {
      anime({
        targets: ".note",
        translateX: [
          { value: -9, duration: 50 },
          { value: 9, duration: 50 },
          { value: -9, duration: 50 },
          { value: 9, duration: 50 },
          { value: 0, duration: 50 },
        ],
        easing: 'easeInSine',
      })
    }


    return ( 
        <div className="noteDisplay">
          <div className="SVGContainer">
            <img src={staff} alt="GrandStaff" className="grandStaff"></img>
            <AllNote accidental={accidental} note={note} noteColor={noteColor} notePosPx={notePosPx}></AllNote>
            <ExtraLines notePosPx={notePosPx}></ExtraLines>
          </div>          
        </div>
     );
}
 
export default NoteDisplay;