import { useEffect } from "react";
import { useOutletContext } from "react-router";

const SightReadAchievements = (props) => {
    const outletContext = useOutletContext()
    const unlockAchievement = outletContext.unlockAchievement

    const prevCombo = props.prevCombo

    useEffect(() => {
        if (prevCombo == 1 ) {
            unlockAchievement(397)
        }

        if (prevCombo == 3 ) {
            unlockAchievement(398)
        }

        if (prevCombo == 9) {
            unlockAchievement(399)
        }

        if (prevCombo == 15) {
            unlockAchievement(400)
        }

        if (prevCombo == 29) {
            unlockAchievement(401)
        }
    }, [prevCombo])
    return null;
}
 
export default SightReadAchievements;