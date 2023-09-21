import { useRef, useState } from "react";

import BackButton from "../components/BackButton"
import NoteDisplay from "../components/NoteDisplay";
import PianoHelper from "../components/PianoHelper"
import tutorialText from "../text/TutorialText";
import tutorialChallengesText from "../text/TutorialChallengesText";
import tutorialTitles from "../text/TutorialTitles";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import TutorialAchievements from "../components/TutorialAchievements";

const Tutorial = () => {
    const outletContext = useOutletContext()
    const notesDown = outletContext.notesDown
    const mutePiano = outletContext.mutePiano
    const imageStore = outletContext.imageStore
    const tutorial_1 = imageStore.tutorial_1
    
    const [image, setImage] = useState(tutorial_1)
    const [note, setNote] = useState(60)
    const [combo, setCombo] = useState(0)
    const [tutorialStep, setTutorialStep] = useState(0)
    const [modalStyle, setmodalStyle] = useState({visibility:"visible"})
    const [tutorialTitle, setTutororialTitle] = useState(tutorialTitles[tutorialStep])
    const [tutorialBodyText, setTutorialBodyText] = useState(tutorialText[tutorialStep])
    const [tutorialChallengeText, setTutorialChallengeText] = useState(tutorialChallengesText[tutorialStep])
    const [showNotes, setshowNotes] = useState(false)

    const prevNote = useRef(0);

    const openModal = (() => {
        setmodalStyle({visibility:"visible"})
    })

    const closeModal = (() => {
        setmodalStyle({visibility:"hidden"})
    })

    const handleOkButton = (() => {
        if (tutorialStep > 22 && tutorialStep != 29) {
            setTutorialStep(tutorialStep => tutorialStep + 1)
        } else {
            closeModal()
        }
    })

    const pickNote = (() => {
        // Notes are unlocked in this order represented as midi notes
        const noteSelection = [60,62,64,65,67,69,71,61,63,66,68,70]
        const cappedStep = Math.min(tutorialStep, 22)
        let tmp
        if (cappedStep % 2 === 0 && cappedStep != 0) {
            tmp = Math.floor(Math.random() * ((cappedStep)/2 + 1))
        } else {
            tmp = Math.floor((cappedStep + 1)/2)
        }
        setNote(noteSelection[tmp])
    })

    const setTutorialImage = (() => {
        switch(tutorialStep) {
            case 0:
                setImage(tutorial_1)
                break
            case 1:
            case 2:
                setImage(imageStore.tutorial_2)
                break
            case 3:
            case 4:
                setImage(imageStore.tutorial_3)
                break
            case 5:
            case 6:
                setImage(imageStore.tutorial_4)
                break
            case 7:
            case 8:
                setImage(imageStore.tutorial_5)
                break
            case 9:
            case 10:
                setImage(imageStore.tutorial_6)
                break
            case 11:
            case 12:
                setImage(imageStore.tutorial_7)
                break
            case 13:
            case 14:
                setImage(imageStore.tutorial_8)
                break
            case 15:
            case 16:
                setImage(imageStore.tutorial_9)
                break
            case 17:
            case 18:
                setImage(imageStore.tutorial_10)
                break
            case 19:
            case 20:
                setImage(imageStore.tutorial_11)
                break
            case 21:
            case 22:
                setImage(imageStore.tutorial_12)
                break
            case 23:
                setImage(imageStore.tutorial_14)
                break
            case 24:
                setImage(imageStore.tutorial_13)
                break
            case 25:
                setImage(imageStore.tutorial_14)
                break
            case 26:
                setImage(imageStore.tutorial_15)
                break
            case 27:
                setImage(imageStore.tutorial_16)
                break
            case 28:
                setImage(imageStore.tutorial_17)
                break
            case 29:
                setImage(imageStore.tutorial_14)
                break
        }
    })

    useEffect(() => {
        setTutororialTitle(tutorialTitles[tutorialStep])
        setTutorialChallengeText(tutorialChallengesText[tutorialStep])
        setTutorialBodyText(tutorialText[tutorialStep])
        setTutorialImage()
        pickNote()
        openModal()
        setCombo(0)
    }, [tutorialStep])

    const advanceTutorial = (() => {
        setTutorialStep(tutorialStep => tutorialStep + 1)
    })

    useEffect(() => {
        let l = Object.keys(notesDown).length
        if (note in notesDown && l == 1 && prevNote.current == 0) {
          pickNote()
          setCombo(combo + 1)
        } else if (l > 0) {
          setCombo(0)
        }

        if (prevNote.current == 0 && l > 0 && tutorialStep < 23) {
            closeModal()
        }

        prevNote.current = l
      }, [notesDown])

    useEffect(() => {
        if (combo >= 5) {
            advanceTutorial()
        }
    }, [combo])

    useEffect(() => {
        mutePiano.current = false
    }, [])

    return ( 
        <div className="tutorial" id="tutorial">
            <TutorialAchievements combo={combo} prevNote={prevNote} tutorialStep={tutorialStep} note={note}></TutorialAchievements>
            <BackButton></BackButton>
            <div className="tutorialContainer">
                <h1 className="tutorialTaskText">{tutorialChallengeText}</h1>
                <h1 className="tutorialCounter">{combo}</h1>
                <NoteDisplay note={note} className="tutorialNoteDisplay"></NoteDisplay>
                <PianoHelper highlightedNotes={[note]} combo={combo} showNotes={showNotes}></PianoHelper>
                <button className="tutorialHelpButton tutorialOkButton"onClick={() => {openModal()}}>Help</button>
            </div>
            <div className="tutorialModalOuterContainer" style={modalStyle}>
                <h1 className="tutorialModalTitle" onClick={pickNote}>{tutorialTitle}</h1>
                <div className="tutorialModalInnerContainer">
                    <img src={image} className="tutorialImage"></img>
                    <div className="tutorialTextContainer">
                        <h1 className="tutorialModalText">{tutorialBodyText}</h1>
                    </div>
                </div>
                <button className="tutorialModalOkButton" onClick={handleOkButton}>Ok</button>
            </div>
        </div>
     );
}
 
export default Tutorial