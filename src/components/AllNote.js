import { useEffect, useState } from "react";

const AllNote = (props) => {
    const accidental = props.accidental
    const note = props.note
    
    const [stemUpOpacity, setStemUpOpacity] = useState(0)
    const [stemDownOpacity, setStemDownOpacity] = useState(0)
    const [sharpOpacity, setSharpOpacity] = useState(0)
    const [flatOpacity, setFlatOpacity] = useState(0)
    const [naturalOpacity, setNaturalOpacity] = useState(0)

    console.log(note)

    useEffect(() => {
        if (note > 59) {
            setStemDownOpacity(0)
            setStemUpOpacity(1)
        } else {
            setStemDownOpacity(1)
            setStemUpOpacity(0)
        }

        switch (accidental) {
            case " ":
                setFlatOpacity(0)
                setSharpOpacity(0)
                setNaturalOpacity(0)
                break;
            case "^":
                setFlatOpacity(0)
                setSharpOpacity(1)
                setNaturalOpacity(0)
                break;
            case "_":
                setFlatOpacity(1)
                setSharpOpacity(0)
                setNaturalOpacity(0)
                break;
            case "=":
                setFlatOpacity(0)
                setSharpOpacity(0)
                setNaturalOpacity(1)
                break;
        }
    }, [note])

    return ( 
        <div className="note">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="70mm"
                height="83mm"
                stroke="#000"
                viewBox="0 0 70 83"
            >
            <path id="noteBody" d="m42.18 39.087a5.5413 7.5869 74.945 0 1-5.1297 7.5799 5.5413 7.5869 74.945 0 1-9.2295-2.7532 5.5413 7.5869 74.945 0 1 5.1297-7.5799 5.5413 7.5869 74.945 0 1 9.2295 2.7532z" fill-rule="evenodd" stroke-width=".25384"/>
            <path id="stemUp" opacity={stemUpOpacity} d="m42.334 40.73v-39.966" stroke-width=".51846"/>
            <path id="stemDown" opacity={stemDownOpacity} d="m27.666 42.27v39.966" stroke-width=".51846"/>
            <path id="sharp" opacity={sharpOpacity} d="m18.679 29.695-0.77308 0.28836v6.028l-5.933 2.1937v-5.8301l-0.77308 0.28887v5.827l-5.7924 2.142v0.68884l5.7924-2.142v6.0518l-5.7924 2.142v0.68833l5.7924-2.142v5.8441l0.77308-0.28887v-5.841l5.933-2.1942v5.8193l0.77308-0.28887v-5.8162l6.0151-2.2242v-0.68833l-6.0151 2.2242v-6.0513l5.7909-2.1415v-0.68885l-5.7909 2.1415zm-0.77308 7.0053v6.0513l-5.933 2.1942v-6.0518z"/>
            <path id="flat" opacity={flatOpacity} d="m12.548 14.471v33.671c10.693-5.2664 11.06-17.148 1.1792-12.519v-21.152zm4.1465 21.584c5.4591 0.0304 1.1666 7.6667-2.9655 10.664v-10.176c1.2068-0.34177 2.1857-0.49252 2.9655-0.48818z" stroke-width=".27984"/>
            <path id="natural" opacity={naturalOpacity} d="m9.3594 33.282v8.0465h0.03219l0.08343 5.9074 9.8538-1.9551v5.9784l1.6956 1e-5v-6.3148l1e-6 -1.7318h-0.02431l-0.09132-6.4245-9.8538 1.9551v-5.4614zm9.9694 5.8608-1e-6 4.0699 1e-6 0.0335-8.2738 1.6352-1e-6 -3.5529v-0.55054z" stroke-width=".3369"/>

            </svg>
        </div>
     );
}
 
export default AllNote;