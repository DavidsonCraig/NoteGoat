const KeySelector = (props) => {
    return ( 
        <div className="keySelector">
            <h3>Chromatic</h3>
            <button onClick={() => {props.handleKeyChange("Cmaj")}}>Cmaj</button>
            <button onClick={() => {props.handleKeyChange("Amin")}}>Amin</button>
            <h3>Sharp Major Keys</h3>
            <button onClick={() => {props.handleKeyChange("Gmaj")}}>Gmaj</button>
            <button onClick={() => {props.handleKeyChange("Dmaj")}}>Dmaj</button>
            <button onClick={() => {props.handleKeyChange("Amaj")}}>Amaj</button>
            <button onClick={() => {props.handleKeyChange("Emaj")}}>Emaj</button>
            <button onClick={() => {props.handleKeyChange("Bmaj")}}>Bmaj</button>
            <button onClick={() => {props.handleKeyChange("F#maj")}}>F#maj</button>
            <button onClick={() => {props.handleKeyChange("C#maj")}}>C#maj</button>
            <h3>Flat Major Keys</h3>
            <button onClick={() => {props.handleKeyChange("Fmaj")}}>Fmaj</button>
            <button onClick={() => {props.handleKeyChange("Bbmaj")}}>Bbmaj</button>
            <button onClick={() => {props.handleKeyChange("Ebmaj")}}>Ebmaj</button>
            <button onClick={() => {props.handleKeyChange("Abmaj")}}>Abmaj</button>
            <button onClick={() => {props.handleKeyChange("Dbmaj")}}>Dbmaj</button>
            <button onClick={() => {props.handleKeyChange("Gbmaj")}}>Gbmaj</button>
            <button onClick={() => {props.handleKeyChange("Cbmaj")}}>Cbmaj</button>
            <h3>Sharp Minor Keys</h3>
            <button onClick={() => {props.handleKeyChange("Emin")}}>Emin</button>
            <button onClick={() => {props.handleKeyChange("Bmin")}}>Bmin</button>
            <button onClick={() => {props.handleKeyChange("F#min")}}>F#min</button>
            <button onClick={() => {props.handleKeyChange("C#min")}}>C#min</button>
            <button onClick={() => {props.handleKeyChange("G#min")}}>G#min</button>
            <button onClick={() => {props.handleKeyChange("D#min")}}>D#min</button>
            <button onClick={() => {props.handleKeyChange("A#min")}}>A#min</button>
            <h3>Flat Minor Keys</h3>
            <button onClick={() => {props.handleKeyChange("Dmin")}}>Dmin</button>
            <button onClick={() => {props.handleKeyChange("Gmin")}}>Gmin</button>
            <button onClick={() => {props.handleKeyChange("Cmin")}}>Cmin</button>
            <button onClick={() => {props.handleKeyChange("Fmin")}}>Fmin</button>
            <button onClick={() => {props.handleKeyChange("Bbmin")}}>Bbmin</button>
            <button onClick={() => {props.handleKeyChange("Ebmin")}}>Ebmin</button>
            <button onClick={() => {props.handleKeyChange("Abmin")}}>Abmin</button>
        </div>
     );
}
 
export default KeySelector;