import { useState } from "react";
import tutorial_1 from "../images/tutorial_1.png"
import tutorial_2 from "../images/tutorial_2.png"
import BackButton from "../components/BackButton"
import NoteDisplay from "../components/NoteDisplay";
import PianoHelper from "../components/PianoHelper"


const Tutorial = () => {
    const tutorialModalMessages = [
        ["Hi there!", "Welcome to Note Goat!"]
    ]
    const [note, setNote] = useState(60)
    const [combo, setCombo] = useState(0)
    const [tutorialStep, setTutorialStep] = useState(0)
    const [modalStyle, setmodalStyle] = useState({visibility:"hidden"})

    const openModal = (() => {
        setmodalStyle({visibility:"visible"})
    })

    const closeModal = (() => {
        setmodalStyle({visibility:"hidden"})
    })


    return ( 
        <div className="tutorial" id="tutorial">
            <BackButton></BackButton>
            <div className="tutorialContainer">
                <h1 className="tutorialTaskText">Get 5 Correct Notes in a row</h1>
                <h1 className="tutorialCounter">{combo}/5</h1>
                <NoteDisplay note={note} className="tutorialNoteDisplay"></NoteDisplay>
                <PianoHelper noteOn={[note]} combo={combo} showNotes={false}></PianoHelper>
                <button className="tutorialHelpButton tutorialOkButton"onClick={() => {openModal()}}>Help</button>
            </div>
        <div className="tutorialModalOuterContainer" style={modalStyle}>
                <h1 className="tutorialModalTitle">D</h1>
                <div className="tutorialModalInnerContainer">
                    <img src={tutorial_1} className="tutorialImage"></img>
                    <div className="tutorialTextContainer">
                        <h1 className="tutorialModalText">Welcome to Note Goat! This app will teach you how to read piano sheet music in a flash. To start lets go over some basics. Looking at a piano might look overwhelming, especially with how may keys there are! Thankfully there are only 12 notes. A, A#, B, C, C#, D, D#, E, E#. F, G#. These 12 notes repeat in that same order for all the keys in a piano. The change in pitch between any two notes that are next to each other is called a semitone. Don't worry about the sharps symbol (#) for now. Just now that every single key on a piano is one of these notes. With that theory out of the way lets start playing. We will start with the Middle C note. Aptly named due its position on the piano; right in the middle. Use the piano helper to find it's position (It will be highlighted green) and press it 5 times in a row to continue to the next stage.</h1>
                    </div>
                </div>
                <button className="tutorialModalOkButton" onClick={closeModal}>Ok</button>
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