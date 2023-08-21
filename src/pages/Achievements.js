import { useState } from "react";
import BackButton from "../components/BackButton";
import { useOutletContext } from "react-router";
import { toast } from "react-toastify";

const Achievements = () => {
    const outletContext = useOutletContext()
    const achievements = outletContext.achievements
    const setAchievements = outletContext.setAchievements
    console.log(achievements)

    return ( 
        <div className="achievements">
            <BackButton></BackButton>
            <div className="achievementsContainer">
                <h1 id="achievementsTitle">Achievements</h1>
                <div className="achievementsScroller">
                    <ul className="achievementsList">
                        {achievements.map((item, index) => (
                            <li key={index} className={item[1]}>{item[0]}
                                <div className="achievementsListSubContainer">
                                    <h3 className="achievementName">{item[2]}</h3>
                                    <h5 className="achievementSubtext">{item[3]}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
     );
}
 
export default Achievements;