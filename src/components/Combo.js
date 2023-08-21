const Combo = (props) => {
    const combo = props.combo
    const highestCombo = props.highestCombo

    return ( 
        <div className="comboContainer">
        <h1 className="comboText" id="combo">Combo: {combo}</h1>
        <h1 className="comboText" id="highestCombo">Highest Combo: {highestCombo}</h1>
      </div>
     );
}
 
export default Combo;