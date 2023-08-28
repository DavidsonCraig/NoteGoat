import { useOutletContext } from "react-router";
import BackButton from "../components/BackButton";
import PianoHelper from "../components/PianoHelper";

const Freeplay = () => {
    const outletContext = useOutletContext()
    const mute = outletContext.mute
    const unmute = outletContext.unmute
    unmute()
    
    return ( 
        <div className="freeplay">
            <BackButton></BackButton>
            <div className="freeplayInnerContainer">
                <h1 className="freeplayTitle">Freeplay</h1>
                    <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
            </div>
        </div>
     );
}
 
export default Freeplay;