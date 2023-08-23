import { useOutletContext } from "react-router";

const Combo = (props) => {
    const outletContext = useOutletContext()
    const highScoreFacade = outletContext.highScoreFacade
    const combo = props.combo
    const prevCombo = props.prevCombo

    return ( 
        <div className="comboContainer">
        <h1 className="comboText" id="combo">Combo: {combo}</h1>
        <h1 className="comboText" id="prevCombo">Previous score: {prevCombo}</h1>
        <h1 className="comboText" id="highestCombo">High score: {highScoreFacade}</h1>
      </div>
     );
}
 
export default Combo;