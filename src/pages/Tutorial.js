import { useRef, useState } from "react";

import tutorial_1 from "../images/tutorial_1.png"
import tutorial_2 from "../images/tutorial_2.png"
import tutorial_3 from "../images/tutorial_3.png"
import tutorial_4 from "../images/tutorial_4.png"
import tutorial_5 from "../images/tutorial_5.png"
import tutorial_6 from "../images/tutorial_6.png"
import tutorial_7 from "../images/tutorial_7.png"
import tutorial_8 from "../images/tutorial_8.png"
import tutorial_9 from "../images/tutorial_9.png"
import tutorial_10 from "../images/tutorial_10.png"
import tutorial_11 from "../images/tutorial_11.png"
import tutorial_12 from "../images/tutorial_12.png"
import tutorial_13 from "../images/tutorial_13.png"
import tutorial_14 from "../images/tutorial_14.png"
import tutorial_15 from "../images/tutorial_15.png"
import tutorial_16 from "../images/tutorial_16.png"
import tutorial_17 from "../images/tutorial_17.png"

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
    const [note, setNote] = useState(60)
    const [combo, setCombo] = useState(0)
    const [tutorialStep, setTutorialStep] = useState(0)
    const [modalStyle, setmodalStyle] = useState({visibility:"visible"})
    const [tutorialTitle, setTutororialTitle] = useState(tutorialTitles[tutorialStep])
    const [tutorialBodyText, setTutorialBodyText] = useState(tutorialText[tutorialStep])
    const [tutorialChallengeText, setTutorialChallengeText] = useState(tutorialChallengesText[tutorialStep])
    const [image, setImage] = useState(tutorial_1)
    const [showNotes, setshowNotes] = useState(false)

    const outletContext = useOutletContext()
    const notesDown = outletContext.notesDown
    const unlockAchievement = outletContext.unlockAchievement
    const mutePiano = outletContext.mutePiano

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
                setImage(tutorial_2)
                break
            case 3:
            case 4:
                setImage(tutorial_3)
                break
            case 5:
            case 6:
                setImage(tutorial_4)
                break
            case 7:
            case 8:
                setImage(tutorial_5)
                break
            case 9:
            case 10:
                setImage(tutorial_6)
                break
            case 11:
            case 12:
                setImage(tutorial_7)
                break
            case 13:
            case 14:
                setImage(tutorial_8)
                break
            case 15:
            case 16:
                setImage(tutorial_9)
                break
            case 17:
            case 18:
                setImage(tutorial_10)
                break
            case 19:
            case 20:
                setImage(tutorial_11)
                break
            case 21:
            case 22:
                setImage(tutorial_12)
                break
            case 23:
                setImage(tutorial_14)
                break
            case 24:
                setImage(tutorial_13)
                break
            case 25:
                setImage(tutorial_14)
                break
            case 26:
                setImage(tutorial_15)
                break
            case 27:
                setImage(tutorial_16)
                break
            case 28:
                setImage(tutorial_17)
                break
            case 29:
                setImage(tutorial_14)
                break
        }
    })

    const tutorialUnlockAchievements = (() => {

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
        tutorialUnlockAchievements()
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
                    <img src={image} className="tutorialImage" onClick={advanceTutorial}></img>
                    <div className="tutorialTextContainer">
                        <h1 className="tutorialModalText">{tutorialBodyText}</h1>
                    </div>
                </div>
                <button className="tutorialModalOkButton" onClick={handleOkButton}>Ok</button>
            </div>
        </div>
     );
}
 
export default Tutorial;






























// import { useState } from 'react';
// import Modal from 'react-modal';
// // import modalImage from "../images/piano.png"

// const Tutorial = () => {
//     const [modalIsOpen, setIsOpen] = useState(false);

//     const customStyles = {
//         content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             backgroundColor: "#00182E",
//             width: "80vw",
//         },
//         overlay: {
//             backgroundColor: "rgba(0, 0, 0, 0)",
//         },
//       };

//     Modal.setAppElement('#root');


//     function openModal() {
//         setIsOpen(true);
//     }

//     function afterOpenModal() {
//         // references are now sync'd and can be accessed.
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     return ( 
//         <div className="tutorial" id="tutorial">
//             <button onClick={openModal}>Open Modal</button>

//         <Modal
//             isOpen={modalIsOpen}
//             onAfterOpen={afterOpenModal}
//             onRequestClose={closeModal}
//             contentLabel="Example Modal"
//             className="tutorialModal"
//             style={customStyle"hidden"         >
//             <div className="tutorialModalInnerContainer">
//                 <h1 className="tutorialModalTitle">Test Modal</h1>
//                 {/* <img src={modalImage} className="pianoMenuDecoration"></img> */}
//                 <h1 className="tutorialModalText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi molestiae in maxime sequi. Rem nihil aspernatur voluptatum aliquid perferendis voluptas doloremque tenetur, beatae consequatur. Reprehenderit, ut officiis qui temporibus, nulla repudiandae deleniti cum fugiat eius harum aliquid sint optio eaque alias adipisci. Adipisci, aliquid unde? Vero consequatur qui ut adipisci.</h1>
//                 <button className="tutorialModalOkButton" onClick={closeModal}>Ok</button>
//             </div>
//         </Modal>
//         </div>
//      );
// }
 
// export default Tutorial;