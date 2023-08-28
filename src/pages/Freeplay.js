import { useOutletContext } from "react-router";
import BackButton from "../components/BackButton";
import PianoHelper from "../components/PianoHelper";
import { useEffect } from "react";
import FreeplayAchievements from "../components/FreeplayAchievements";

const Freeplay = () => {
    const outletContext = useOutletContext()
    const mutePiano = outletContext.mutePiano
    
    useEffect(() => {
        mutePiano.current = false
    }, [])
    
    return ( 
        <div className="freeplay">
            <FreeplayAchievements></FreeplayAchievements>
            <BackButton></BackButton>
            <div className="freeplayInnerContainer">
                <h1 className="freeplayTitle">Freeplay</h1>
                    <PianoHelper highlightedNotes={[]} combo={0} showNotes={false}></PianoHelper>
            </div>
        </div>
     );
}
 
export default Freeplay;