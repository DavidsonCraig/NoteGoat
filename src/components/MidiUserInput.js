import { useEffect } from "react";
import * as Tone from "tone";

const MidiUserInput = () => {
    Tone.start();
    //Base context setup for minimising latency
    Tone.context.lookAhead = 0;

    //Initialises base synth
    let synth;

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
        volume: 10
    }).toDestination();

    //Set synth to piano by default
    synth = pianoSynth;


    //Requests access to MIDI
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(MIDIsuccess, MIDIfailure);
    }


    function MIDIfailure() {
        console.log("Failed to connect MIDI");
    }

    function MIDIsuccess(acess) {
        console.log(acess);
        acess.onstatechange = updateDevices;

        let inputs = acess.inputs;

        inputs.forEach((input) => {
            input.onmidimessage = handleInput;
        });
    }

    function handleInput(input) {
        const command = input.data[0];
        const note = input.data[1];
        const velocity = input.data[2];

        //Note off can either be MIDI-144 with no velocity or MIDI 128
        //May be more MIDI signal numbers to research
        switch (command) {
            case 144:
                if (velocity > 0) {
                    noteOn(note, velocity);
                } else {
                    noteOff(note);
                }
                break;
            case 128:
                noteOff(note);
                break;
        }
    }

    function noteOn(note, velocity) {
        console.log(note, velocity);
        console.log(Tone.context.lookAhead)
        synth.triggerAttack(Tone.Frequency(note, "midi"), Tone.now(), velocity / 100);
    }

    function noteOff(note) {
        synth.triggerRelease(Tone.Frequency(note, "midi"));
        console.log(note);
    }

    function updateDevices(event) {
        console.log(`${event.port.name}, State: ${event.port.state}`);
    }
    return (
        <div className="MidiUserInput"></div>
    );
}

export default MidiUserInput;