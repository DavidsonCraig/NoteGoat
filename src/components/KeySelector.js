const KeySelector = (props) => {
    const handleSelectChange = (() => {
        let x = document.getElementById("keySelector").value
        props.handleKeyChange(x)
    })
    return ( 
        <div className="keySelectorContainer sightReadOptionContainer">
            <select name="Key" id="keySelector" className="sightReadOption" onChange={handleSelectChange}>
                <option disabled>Chromatic</option>
                <option value="CMaj">Cmaj/Amin</option>
                <option disabled>Sharp Keys</option>
                <option value="GMaj">Gmaj/Emin</option>
                <option value="DMaj">Dmaj/Bmin</option>
                <option value="AMaj">Amaj/F#min</option>
                <option value="EMaj">Emaj/C#min</option>
                <option value="BMaj">Bmaj/G#min</option>
                <option value="FSharpMaj">F#maj/D#min</option>
                <option value="CSharpMaj">C#maj/A#min</option>
                <option disabled>Flat Keys</option>
                <option value="FMaj">Fmaj/Dmin</option>
                <option value="BFlatMaj">Bbmaj/Gmin</option>
                <option value="EFlatMaj">Ebmaj/Cmin</option>
                <option value="AFlatMaj">Abmaj/Fmin</option>
                <option value="DFlatMaj">Dbmaj/Bbmin</option>
                <option value="GFlatMaj">Gbmaj/Ebmin</option>
                <option value="CFlatMaj">Cbmaj/Abmin</option>
            </select>
        </div>
     );
}
 
export default KeySelector;