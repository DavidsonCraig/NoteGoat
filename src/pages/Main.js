import { NavLink } from "react-router-dom";
import piano from "../images/piano.png"
import { useEffect } from "react";
import anime from "animejs";

export default function Main(props) {

    useEffect(() => {
      console.log("Bruh")
      anime({
        targets: '.pianoMenuDecoration',
        translateY: ['25vh', '0vh'],
        duration: 4000,
        loop: true,
        easing: 'linear',
      });
    },[])

    return (
      <div className="main">
        <div className="pianoMenuDecorationContainer">
          <img src={piano} className="pianoMenuDecoration"></img>
        </div>
        <div className="menuOptionContainer">
          <NavLink to="/sightread" className="menuOption">Learn to read</NavLink>
          <NavLink to="/achievements" className="menuOption">Achievements</NavLink>
          <NavLink to="/settings" className="menuOption">Settings</NavLink>
        </div>
      </div>
    )
}