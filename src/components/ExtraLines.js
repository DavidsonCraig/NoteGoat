import { useEffect, useState } from "react";

const ExtraLines = (props) => {
    const [extraLineTreble5, setExtraLineTreble5] = useState(0)
    const [extraLineTreble4, setExtraLineTreble4] = useState(0)
    const [extraLineTreble3, setExtraLineTreble3] = useState(0)
    const [extraLineTreble2, setExtraLineTreble2] = useState(0)
    const [extraLineTreble1, setExtraLineTreble1] = useState(0)

    const [extraLineBass1, setExtraLineBass1] = useState(0)
    const [extraLineBass2, setExtraLineBass2] = useState(0)

    const [extraLineMiddleC, setExtraLineMiddleC] = useState(0)

    const notePosPx = props.notePosPx

    useEffect(() => {
        if (notePosPx === 16.5) {
            setExtraLineMiddleC(1)
        } else {
            setExtraLineMiddleC(0)
        }

        if (notePosPx < -145) {
            setExtraLineTreble1(1)
        } else {
            setExtraLineTreble1(0)
        }

        if (notePosPx < -172) {
            setExtraLineTreble2(1)
        } else {
            setExtraLineTreble2(0)
        }

        if (notePosPx < -199) {
            setExtraLineTreble3(1)
        } else {
            setExtraLineTreble3(0)
        }

        if (notePosPx < -226) {
            setExtraLineTreble4(1)
        } else {
            setExtraLineTreble4(0)
        }

        if (notePosPx < -253) {
            setExtraLineTreble5(1)
        } else {
            setExtraLineTreble5(0)
        }

        if (notePosPx > 292) {
            setExtraLineBass1(1)
        } else {
            setExtraLineBass1(0)
        }

        if (notePosPx > 319) {
            setExtraLineBass2(1)
        } else {
            setExtraLineBass2(0)
        }
    }, [notePosPx])
    return ( 
        <div className="extraLinesContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="200"
                height="680"
                stroke="#000"
                fill="#000"
                viewBox="0 0 200 669"
            >            
            <g fill="#00274a" stroke="#00274a">
            <g strokeWidth="1.5">
            <path id="extraLineTreble5" opacity={extraLineTreble5} d="m-48.837 10.419h150"/>
            <path id="extraLineTreble4" opacity={extraLineTreble4} d="m-48.807 41.45h150"/>
            <path id="extraLineTreble3" opacity={extraLineTreble3} d="m-48.777 72.481h150"/>
            <path id="extraLineTreble2" opacity={extraLineTreble2} d="m-48.734 103.51h150"/>
            <path id="extraLineTreble1" opacity={extraLineTreble1} d="m-48.809 134.54h150"/>
            <path id="extraLineBass1" opacity={extraLineBass1} d="m-48.139 640.15h150"/>
            <path id="extraLineBass2" opacity={extraLineBass2} d="m-48.109 671.18h150"/>
            <path id="extraLineMiddleC" opacity={extraLineMiddleC} d="m-48.109 319h150"/>
            </g></g>
        </svg>
        </div>
     );
}
 
export default ExtraLines;