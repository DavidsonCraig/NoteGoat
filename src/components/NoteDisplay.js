import { useEffect, useState, useRef } from "react"
import { useOutletContext } from "react-router"
import anime from "animejs";

import AllNote from "./AllNote"
import ExtraLines from "./ExtraLines";
import GrandStaff from "./GrandStaff";

const NoteDisplay = (props) => {
    const note = props.note

    const [notePosPx, setNotePosPx] = useState(79)
    const [accidental,setAccidental] = useState(" ")
    const [noteColor, setNoteColor] = useState("#00274aff")

    const outletContext = useOutletContext()
    const notesDown = outletContext.notesDown
    const keySignature = outletContext.keySignature

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
    
    //Update Note position
    useEffect(() => {
      document.documentElement.style.setProperty('--note-height', `${notePosPx}px`)
    }, [notePosPx])

    //Animation handling
    useEffect(() => {
      let l = Object.keys(notesDown).length
  
      //Fill note logic
      if ((note in notesDown && l == 1 && prevNote.current == 0) || ((l == 0) && noteColor == "red")) {
        setNoteColor("#00274aff")
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
            <AllNote accidental={accidental} note={note} noteColor={noteColor} notePosPx={notePosPx}></AllNote>
            <ExtraLines notePosPx={notePosPx}></ExtraLines>
            <GrandStaff keySignature={keySignature}></GrandStaff>
          </div>          
        </div>
     );
}
 
export default NoteDisplay;