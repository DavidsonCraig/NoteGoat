import { useEffect, useRef, useState, useMemo } from "react";
import { Outlet } from "react-router"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Tone from "tone"
import lock from "../images/lock.png"
import achievementsSource from "../text/AchievementsSource";
import RootAchievements from "../components/RootAchievements";



export default function RootLayout() {
    //Initialises base synth
    const [notesDown, setNotesDown] = useState({})
    const refNotesDown = useRef({})

    const [difficulty, setDifficulty] = useState("0")
    const [keySignature, setKeySignature] = useState("CMaj")
    const [totalCorrectNotes, setTotalCorrectNotes] = useState(0)
    const [totalIncorrectNotes, setTotalIncorrectNotes] = useState(0)
    const [currency, setCurrency] = useState(0)
    const [midiStatus, setMidiStatus] = useState(null)
    const [numOfAchievementsUnlocked, setnumOfAchievementsUnlocked] = useState(0)
    const mutePiano = useRef(false)
    const systemMute = useRef(false)


    ondragstart = (event) => {
        event.preventDefault()
    }
    
    const earnCurrency = ((x) => {
        setCurrency(currency => currency + x)
    })

    const [achievements, setAchievements] = useState(JSON.parse(localStorage.getItem("achievements")) || achievementsSource)

    const [highScoreFacade, setHighScoreFacade] = useState(0)
    //Stats for each key signature
    //Three blocks of four (Due to shallow comparison of react)
    //Block 1 = High score
    //Block 2 = Total correct notes
    //Block 3 = Total incorrect notes
    //Within each block: 0 = novice, 1 = advanced, 2 = expert, 3 = GOAT
    //Chromatic
    const [statsCMaj, setStatsCMaj] = useState(JSON.parse(localStorage.getItem("CMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    //Sharps
    const [statsGMaj, setStatsGMaj] = useState(JSON.parse(localStorage.getItem("GMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsDMaj, setStatsDMaj] = useState(JSON.parse(localStorage.getItem("DMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsAMaj, setStatsAMaj] = useState(JSON.parse(localStorage.getItem("AMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsEMaj, setStatsEMaj] = useState(JSON.parse(localStorage.getItem("EMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsBMaj, setStatsBMaj] = useState(JSON.parse(localStorage.getItem("BMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsFSharpMaj, setStatsFSharpMaj] = useState(JSON.parse(localStorage.getItem("FSharpMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsCSharpMaj, setStatsCSharpMaj] = useState(JSON.parse(localStorage.getItem("CSharpMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    //Flats
    const [statsFMaj, setStatsFMaj] = useState(JSON.parse(localStorage.getItem("FMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsBFlatMaj, setStatsBFlatMaj] = useState(JSON.parse(localStorage.getItem("BFlatMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsEFlatMaj, setStatsEFlatMaj] = useState(JSON.parse(localStorage.getItem("EFlatMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsAFlatMaj, setStatsAFlatMaj] = useState(JSON.parse(localStorage.getItem("AFlatMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsDFlatMaj, setStatsDFlatMaj] = useState(JSON.parse(localStorage.getItem("DFlatMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsGFlatMaj, setStatsGFlatMaj] = useState(JSON.parse(localStorage.getItem("GFlatMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])
    const [statsCFlatMaj, setStatsCFlatMaj] = useState(JSON.parse(localStorage.getItem("CFlatMaj")) || [0,0,0,0,0,0,0,0,0,0,0,0])

    const getStats = ((x) => {
        switch(keySignature) {
            //chromatic
            case "CMaj":
                return statsCMaj
                break
            //sharps
            case "GMaj":
                return statsGMaj
                break
            case "DMaj":
                return statsDMaj
                break
            case "AMaj":
                return statsAMaj
                break
            case "EMaj":
                return statsEMaj
                break
            case "BMaj":
                return statsBMaj
                break
            case "FSharpMaj":
                return statsFSharpMaj
                break
            case "CSharpMaj":
                return statsCSharpMaj
                break
            //Flats
            case "FMaj":
                return statsFMaj
                break
            case "BFlatMaj":
                return statsBFlatMaj
                break
            case "EFlatMaj":
                return statsEFlatMaj
                break
            case "AFlatMaj":
                return statsAFlatMaj
                break
            case "DFlatMaj":
                return statsDFlatMaj
                break
            case "GFlatMaj":
                return statsGFlatMaj
                break
            case "CFlatMaj":
                return statsCFlatMaj
                break
            default:
                return statsCMaj
                break
        }
    })

    const setStats = ((x) => {
        switch(keySignature) {
            //chromatic
            case "CMaj":
                setStatsCMaj(x)
                break
            //sharps
            case "GMaj":
                setStatsGMaj(x)
                break
            case "DMaj":
                setStatsDMaj(x)
                break
            case "AMaj":
                setStatsAMaj(x)
                break
            case "EMaj":
                setStatsEMaj(x)
                break
            case "BMaj":
                setStatsBMaj(x)
                break
            case "FSharpMaj":
                setStatsFSharpMaj(x)
                break
            case "CSharpMaj":
                setStatsCSharpMaj(x)
                break
            //Flats
            case "FMaj":
                setStatsFMaj(x)
                break
            case "BFlatMaj":
                setStatsBFlatMaj(x)
                break
            case "EFlatMaj":
                setStatsEFlatMaj(x)
                break
            case "AFlatMaj":
                setStatsAFlatMaj(x)
                break
            case "DFlatMaj":
                setStatsDFlatMaj(x)
                break
            case "GFlatMaj":
                setStatsGFlatMaj(x)
                break
            case "GFlatMaj":
                setStatsGFlatMaj(x)
                break
            case "CFlatMaj":
                setStatsCFlatMaj(x)
                break
            default:
                setStatsCMaj(x)
                break
        }
    })

    const updateStats = ((x) => {
        let tmp = [...getStats()]
        if (x > highScoreFacade) {
            tmp[parseInt(difficulty)] = x
        }
        tmp[parseInt(difficulty) + 4] += x 
        tmp[parseInt(difficulty) + 8] += 1
        setStats(tmp)
        setTotalCorrectNotes(totalCorrectNotes => totalCorrectNotes + x)
        setTotalIncorrectNotes(TotalIncorrectNotes => TotalIncorrectNotes + 1)
        if (x > 0) {
            save(tmp)
        }
    })

    //Update highscore facade
    useEffect(() => {
        let tmp = getStats()[parseInt(difficulty)]
        setHighScoreFacade(tmp)
    }, [keySignature, 
        difficulty, 
        statsCMaj,
        //Sharps
        statsGMaj,
        statsDMaj,
        statsAMaj,
        statsEMaj,
        statsBMaj,
        statsFSharpMaj, 
        statsCSharpMaj, 
        //Flats
        statsFMaj,
        statsBFlatMaj,
        statsEFlatMaj,
        statsAFlatMaj,
        statsDFlatMaj,
        statsGFlatMaj,
        statsCFlatMaj,
    ])

    const saveAchievements = ((x) => {
        const tmp = JSON.stringify(x)
        localStorage.setItem(`achievements`, tmp)
    })

    const unlockAchievement = ((x) => {
        if (x > 406 || x < 0) {
            return
        }
        
        if (achievements[x][1] == "locked") {
            setnumOfAchievementsUnlocked(setnumOfAchievementsUnlocked => setnumOfAchievementsUnlocked + 1)
            const tmp = [...achievements]
            tmp[x][1] = "unlocked"
            setAchievements(tmp)
            saveAchievements(tmp)
            
            toast.success(
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
                   icon: ({theme, type}) =>  <img src={lock} className="lock"/>
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
        let x = `${event.port.name}, State: ${event.port.state}`
        console.log(x)
        setMidiStatus(x)
        
    })

    const noteOn = ((note, velocity) => {
        if (synth.loaded) {
            if (!systemMute.current && !mutePiano.current) {
                synth.triggerAttack(Tone.Frequency(note, "midi"), Tone.now(), velocity / 100)
            }
            refNotesDown.current[note] = ""
            setNotesDown({...refNotesDown.current})    
        }
    })

    const noteOff = ((note) => {
        if (synth.loaded && note in refNotesDown.current) {
            synth.triggerRelease(Tone.Frequency(note, "midi"))
            delete refNotesDown.current[note]
            setNotesDown({...refNotesDown.current})    
        }
    })

    const handleInput = ((input) => {
        const command = input.data[0]
        const note = input.data[1]
        const velocity = input.data[2]

        //Note off can either be MIDI-144 with no velocity or MIDI 128
        //May be more MIDI signal numbers to research
        if (synth.loaded) {
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
        }
    })

    const MIDIsuccess = ((acess) => {
        acess.onstatechange = updateDevices

        let inputs = acess.inputs

        inputs.forEach((input) => {
            input.onmidimessage = handleInput
        });
    })

    const save = ((x) => {
        const keyStats = JSON.stringify(x)
        localStorage.setItem(`${keySignature}`, keyStats)

        const totalCorrect = JSON.stringify(totalCorrectNotes)
        localStorage.setItem("totalCorrectNotes", totalCorrect)

        const totalIncorrect = JSON.stringify(totalIncorrectNotes)
        localStorage.setItem("totalIncorrectNotes", totalIncorrect)
    })

    return (
        <div className="rootLayout">
            <Outlet context={{
                notesDown: notesDown, 
                mutePiano: mutePiano,
                achievements: achievements, 
                unlockAchievement: unlockAchievement,
                difficulty: difficulty,
                setDifficulty: setDifficulty,
                keySignature: keySignature,
                setKeySignature: setKeySignature,
                highScoreFacade: highScoreFacade,
                updateStats: updateStats,
                save: save,
                midiStatus: midiStatus,
                systemMute: systemMute,
                noteOn: noteOn,
                noteOff: noteOff,
                }}></Outlet>
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
            <RootAchievements 
            statsCMaj={statsCMaj}
            statsGMaj={statsGMaj}
            statsDMaj={statsDMaj}
            statsAMaj={statsAMaj}
            statsEMaj={statsEMaj}
            statsBMaj={statsBMaj}
            statsFSharpMaj={statsFSharpMaj}
            statsCSharpMaj={statsCSharpMaj}
            statsFMaj={statsFMaj}
            statsBFlatMaj={statsBFlatMaj}
            statsEFlatMaj={statsEFlatMaj}
            statsAFlatMaj={statsAFlatMaj}
            statsDFlatMaj={statsDFlatMaj}
            statsGFlatMaj={statsGFlatMaj}
            statsCFlatMaj={statsCFlatMaj}
            totalCorrectNotes={totalCorrectNotes}
            unlockAchievement={unlockAchievement}
            numOfAchievementsUnlocked={numOfAchievementsUnlocked}
            ></RootAchievements>
        </div>
    )
}

//Notes
//Using a useState variable within the midi setup leads to a stale closure of values, as a way round this I have made a useRef which updates whenever the useState does. I then use the useRef variable within the midi code to prevent the stale closure. May lead to performance issue due to overhead