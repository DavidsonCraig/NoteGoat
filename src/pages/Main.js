import { NavLink, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import anime from "animejs";

export default function Main(props) {
  const outletContext = useOutletContext()
  const unlockAchievement = outletContext.unlockAchievement
  const mutePiano = outletContext.mutePiano
  const imageStore = outletContext.imageStore
  const piano = imageStore.piano

    useEffect(() => {
      const animation = anime({
        targets: '.pianoMenuDecoration',
        translateY: ['25vh', '0vh'],
        duration: 4000,
        loop: true,
        easing: 'linear',
      });

      return (() => {
        animation.reset()
      })
    },[])

    useEffect(() => {
      mutePiano.current = true
    }, [])

    return (
      <div className="main">
        <div className="pianoMenuDecorationContainer" onClick={(() => {unlockAchievement(14)})}>
          <img src={piano} className="pianoMenuDecoration"></img>
        </div>
        <div className="menuOptionContainer">
          <NavLink to="/NoteGoat/tutorial" className="menuOption" onClick={(() => {unlockAchievement(1)})}>Tutorial</NavLink>
          <NavLink to="/NoteGoat/sightread" className="menuOption">Arcade</NavLink> 
          <NavLink to="/NoteGoat/freeplay" className="menuOption" onClick={(() => {unlockAchievement(12)})}>Freeplay</NavLink>
          <NavLink to="/NoteGoat/achievements" className="menuOption" onClick={(() => {unlockAchievement(15)})}>Achievements</NavLink>
          <NavLink to="/NoteGoat/settings" className="menuOption" onClick={(() => {unlockAchievement(13)})}>Settings</NavLink>
        </div>
      </div>
    )
}