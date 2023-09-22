import { useOutletContext } from "react-router"
import { useEffect, useState } from "react"
import BackButton from "../components/BackButton"


export default function Settings() {
  const outletContext = useOutletContext()
  const midiStatus = outletContext.midiStatus
  const mutePiano = outletContext.mutePiano
  const systemMute = outletContext.systemMute
  const unlockAchievement = outletContext.unlockAchievement

  const [muteButtonText, setMuteButtonText] = useState("Mute")

  const handleResetProgress = (() => {
    const x = window.confirm("Are you sure you want to reset all progress and achievements?")
    if (x) {
      localStorage.clear()
      window.confirm("Progress has been wiped, please refresh page")
    } else {
      console.log("Data reset aborted")
    }
  })

  const handleMuteButton = (() => {
    unlockAchievement(11)
    let x
    if (systemMute.current === true) {
      x = false
      setMuteButtonText("Mute")
    } else {
      x = true
      setMuteButtonText("Unmute")
    }
    systemMute.current = x
  })

  useEffect(() => {
    mutePiano.current = true
  }, [])

  useEffect(() => {
    if (systemMute.current === true) {
      setMuteButtonText("Unmute")
    } else {
      setMuteButtonText("Mute")
    } 
  }, [])

    return (
      <div className="settings">
        <BackButton></BackButton>
        <div className="settingsInnerContainer">
          <h1 className="settingsTitle">Settings</h1>
          <h1 className="midiStatus">Midi device: {midiStatus}</h1>
          <button className="muteButton" onClick={handleMuteButton}>{muteButtonText}</button>
          <button className="resetProgess" onClick={handleResetProgress}>Reset all progress</button>
        </div>
      </div>
    )
}