const KeySelector = (props) => {
    const handleSelectChange = (() => {
        let x = document.getElementById("KeySelector").value
        props.handleKeyChange(x)
    })
    return ( 
        <div className="keySelector">
            <select name="Key" id="KeySelector" onChange={handleSelectChange}>
                <option disabled>Chromatic</option>
                <option value="Cmaj">Cmaj</option>
                <option value="Amin">Amin</option>
                <option disabled>Sharp Major Keys</option>
                <option value="Gmaj">Gmaj</option>
                <option value="Dmaj">Dmaj</option>
                <option value="Amaj">Amaj</option>
                <option value="Emaj">Emaj</option>
                <option value="Bmaj">Bmaj</option>
                <option value="F#maj">F#maj</option>
                <option value="C#maj">C#maj</option>
                <option disabled>Flat Major Keys</option>
                <option value="Fmaj">Fmaj</option>
                <option value="Bbmaj">Bbmaj</option>
                <option value="Ebmaj">Ebmaj</option>
                <option value="Abmaj">Abmaj</option>
                <option value="Dbmaj">Dbmaj</option>
                <option value="Gbmaj">Gbmaj</option>
                <option value="Cbmaj">Cbmaj</option>
                <option disabled>Sharp Minor Keys</option>
                <option value="Emin">Emin</option>
                <option value="Bmin">Bmin</option>
                <option value="F#min">F#min</option>
                <option value="C#min">C#min</option>
                <option value="G#min">G#min</option>
                <option value="D#min">D#min</option>
                <option value="A#min">A#min</option>
                <option disabled>Flat Minor Keys</option>
                <option value="Dmin">Dmin</option>
                <option value="Gmin">Gmin</option>
                <option value="Cmin">Cmin</option>
                <option value="Fmin">Fmin</option>
                <option value="Bbmin">Bbmin</option>
                <option value="Ebmin">Ebmin</option>
                <option value="Abmin">Abmin</option>
            </select>
        </div>
     );
}
 
export default KeySelector;