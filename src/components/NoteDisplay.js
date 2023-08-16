import { useEffect, useState } from "react"
import noteImage from "../images/noteStemUp.svg"
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

//Notes
import noteStemDown from "../images/notes/noteStemDown.svg"
import noteStemDownFlat from "../images/notes/noteStemDownFlat.svg"
import noteStemDownNatural from "../images/notes/noteStemDownNatural.svg"
import noteStemDownSharp from "../images/notes/noteStemDownSharp.svg"
import noteStemUp from "../images/notes/noteStemUp.svg"
import noteStemUpFlat from "../images/notes/noteStemUpFlat.svg"
import noteStemUpSharp from "../images/notes/noteStemUpSharp.svg"
import noteStemUpNatural from "../images/notes/noteStemUpNatural.svg"



const NoteDisplay = (props) => {
    const noteVector = document.getElementById("note")

    const MIDINoteDisplay = props.MIDINoteDisplay
    const keySignature = props.keySignature

    const [staff, setStaff] = useState(CMaj)
    const [accidental, setAccidental] = useState("none")
    const [noteImage, setNoteImage] = useState(noteStemUp)
    const [notepos, setNotePos] = useState("C")

    const transformMIDI = (MIDInote, keySignature) => {
      let o = {
          "CMaj": [' C','^C',' D','^D',' E',' F','^F',' G','^G',' A','^A',' B'],
          "AMin": [' C','^C',' D','^D',' E','F','^F','G','^G','A','^A','B'],
          //Sharp major keys
          "GMaj": [' C','^C',' D','^D',' E','=F',' F',' G','^G',' A','^A',' B'],
          "DMaj": ['=C',' C',' D','^D',' E','=F',' F',' G','^G',' A','^A',' B'],
          "AMaj": ['=C',' C',' D','^D',' E','=F',' F','=G',' G',' A','^A',' B'],
          "EMaj": ['=C',' C','=D',' D',' E','=F',' F','=G',' G',' A','^A',' B'], 
          "BMaj": ['=C',' C','=D',' D',' E','=F',' F','=G',' G','=A',' A',' B'], 
          "FSharpMaj": ['=C',' C','=D',' D','=E',' E',' F','=G',' G','=A',' A',' B'],
          "CSharpMaj": [' B,', ' C','=D',' D','=E',' E',' F','=G',' G','=A',' A','=B'],
          //Flat major keys
          "FMaj": [' C','_D',' D','_E',' E',' F','_G',' G','_A',' A',' B','=B'],
          "BFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G','_A',' A',' B','=B'],
          "EFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G',' A','=A',' B','=B'],
          "AFlatMaj": [' C','_D',' D',' E','=E',' F','_G',' G',' A','=A',' B','=B'],
          "DFlatMaj": [' C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B','=B'],
          "GFlatMaj": ['=C',' D','=D',' E','=E',' F',' G','=G',' A','=A',' B',' C'],
          "CFlatMaj": ['=C',' D','=D',' E',' F','=F',' G','=G',' A','=A',' B',' C'],
      }
      let n = o[keySignature][MIDInote % 12]
      setAccidental(n[0])
      setNotePos(n[1])
  }

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
        transformMIDI(MIDINoteDisplay,keySignature)
    }, [keySignature])

    //Update Note Accidentals
    useEffect(() => {
      if (MIDINoteDisplay >= 60) {
        switch (accidental) {
          case (" "):
            setNoteImage(noteStemUp)
            break
          case ("^"):
            setNoteImage(noteStemUpSharp)
            break
          case ("_"):
            setNoteImage(noteStemUpFlat)
            break
          case ("="):
            setNoteImage(noteStemUpNatural)
            break
        }
      } else {
        switch (accidental) {
          case (" "):
            setNoteImage(noteStemDown)
            break
          case ("^"):
            setNoteImage(noteStemDownSharp)
            break
          case ("_"):
            setNoteImage(noteStemDownFlat)
            break
          case ("="):
            setNoteImage(noteStemDownNatural)
            break
        }
      }
      
    }, [accidental,MIDINoteDisplay])
    
    //Update Note position
    useEffect(() => {
      if (MIDINoteDisplay == 60) {
        document.documentElement.style.setProperty('--note-height', '79px')
      }

    }, [notepos])


    return ( 
        <div className="testContainer">
          <div className="testImageContainer">
            <img src={staff} alt="GrandStaff" className="grandStaff"></img>
            <object data={noteImage} type="image/svg+xml" className="note" id="note"></object>
          </div>          
        </div>
     );
}
 
export default NoteDisplay;