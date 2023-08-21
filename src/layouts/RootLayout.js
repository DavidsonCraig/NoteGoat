import { useEffect, useRef, useState, useMemo } from "react";
import { Outlet } from "react-router"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Tone from "tone"

export default function RootLayout() {
    //Initialises base synth
    const [notesDown, setNotesDown] = useState({})
    const refNotesDown = useRef({})

    const [achievements, setAchievements] = useState([
        ["00", "locked", "Hi!", "Start the game"],
        ["01", "locked", "First step", "Play a correct note"],
        ["02", "locked", "Graduated", "Complete the tutorial"],
        ["03", "locked", "A is for Aardvark", "Play a correct A note"],
        ["04", "locked", "B is for Beaver", "Play a correct B note"],
        ["05", "locked", "C is for Cow", "Play a correct C note"],
        ["06", "locked", "D is for Duck", "Play a correct D note"],
        ["07", "locked", "E is for Elephant", "Play a correct E note"],
        ["08", "locked", "F is for Fox", "Play a correct F note"],
        ["09", "locked", "G is for GOAT", "Play a correct G note"],
        ["10", "locked", "Ouch that's sharp!", "Play a correct sharp note"],
        ["11", "locked", "Flat tyre", "Play a correct Flat note"],
    ])

    const unlockAchievement = ((x) => {
        if (achievements[x][1] == "locked") {
            const tmp = [...achievements]
            tmp[x][1] = "unlocked"
            setAchievements(tmp)
            
            toast(
                <div className="toastContainer">
                   <h1 className="toastTitle">{tmp[x][2]}</h1>
                   <h2 className="toastSubtitle">{tmp[x][3]}</h2>
                </div>,
               {
                   position: "bottom-left",
                   autoClose: 3000,
                   hideProgressBar: true,
                   closeButton: false,
                   pauseOnHover: true,
                   draggable: false,
                   progress: undefined,
                   style: { background: '#4ec091ff', color: 'white'},
                   });
        }
        
    })


    const synth = useMemo(() => {
        Tone.start();
        console.log("Tone.js start")

        //Base context setup for minimising latency
        Tone.context.lookAhead = 0

        let pianoSynth = new Tone.Sampler({
            urls: {
                "A0": "A0.mp3",
                "C1": "C1.mp3",
                "D#1": "Ds1.mp3",
                "F#1": "Fs1.mp3",
                "A1": "A1.mp3",
                "C2": "C2.mp3",
                "D#2": "Ds2.mp3",
                "F#2": "Fs2.mp3",
                "A2": "A2.mp3",
                "C3": "C3.mp3",
                "D#3": "Ds3.mp3",
                "F#3": "Fs3.mp3",
                "A3": "A3.mp3",
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
                "C5": "C5.mp3",
                "D#5": "Ds5.mp3",
                "F#5": "Fs5.mp3",
                "A5": "A5.mp3",
                "C6": "C6.mp3",
                "D#6": "Ds6.mp3",
                "F#6": "Fs6.mp3",
                "A6": "A6.mp3",
                "C7": "C7.mp3",
                "D#7": "Ds7.mp3",
                "F#7": "Fs7.mp3",
                "A7": "A7.mp3",
                "C8": "C8.mp3"
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination()
        return pianoSynth
    },[])

    useEffect(() => {
         //Requests access to MIDI
         if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then(MIDIsuccess, MIDIfailure);
        }
    },[])

    ///////////////Midi Setup Functions
    const MIDIfailure = (() => {
        console.log("Failed to connect MIDI")
    })

    const updateDevices = ((event) => {
        console.log(`${event.port.name}, State: ${event.port.state}`)
    })

    const noteOn = ((note, velocity) => {
        synth.triggerAttack(Tone.Frequency(note, "midi"), Tone.now(), velocity / 100)
        refNotesDown.current[note] = ""
        setNotesDown({...refNotesDown.current})
    })

    const noteOff = ((note) => {
        synth.triggerRelease(Tone.Frequency(note, "midi"))
        delete refNotesDown.current[note]
        setNotesDown({...refNotesDown.current})
    })

    const handleInput = ((input) => {
        const command = input.data[0]
        const note = input.data[1]
        const velocity = input.data[2]

        //Note off can either be MIDI-144 with no velocity or MIDI 128
        //May be more MIDI signal numbers to research
        switch (command) {
            case 144:
                if (velocity > 0) {
                    noteOn(note, velocity)
                } else {
                    noteOff(note)
                }
                break
            case 128:
                noteOff(note)
                break
        }
    })

    const MIDIsuccess = ((acess) => {
        console.log(acess)
        acess.onstatechange = updateDevices

        let inputs = acess.inputs

        inputs.forEach((input) => {
            input.onmidimessage = handleInput
        });
    })

    const toggleMute = (() => {
        if (synth.volume.value == -100) {
            synth.volume.value = 0
        } else {
            synth.volume.value = -100
        }
    })

    const mute = (() => {
        synth.volume.value = -100
    })

    const unmute = (() => {
        synth.volume.value = 0
    })

    return (
        <div className="rootLayout">
            <Outlet context={{notesDown: notesDown, toggleMute: toggleMute, mute: mute, unmute: unmute, achievements: achievements, unlockAchievement: unlockAchievement}}></Outlet>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="colored"
                />
        </div>
    )
}

//Notes
//Using a useState variable within the midi setup leads to a stale closure of values, as a way round this I have made a useRef which updates whenever the useState does. I then use the useRef variable within the midi code to prevent the stale closure. May lead to performance issue due to overhead