import { useOutletContext } from "react-router";

const Combo = (props) => {
    const outletContext = useOutletContext()
    const highScoreFacade = outletContext.highScoreFacade
    const combo = props.combo

    return ( 
        <div className="comboContainer">
        <h1 className="comboText" id="combo">Combo: {combo}</h1>
        <h1 className="comboText" id="highestCombo">Highest Combo: {highScoreFacade}</h1>
      </div>
     );
}
 
export default Combo;