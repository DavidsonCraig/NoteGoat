import anime from "animejs";
import { NavLink } from "react-router-dom";

export default function Splash() {

  const handleAnimation = (() => {
    anime({
      targets: ".titleLetter",
      translateY: "-110vh",
      delay: anime.stagger(100)
    })
  })
  
    return (
      <div className="splash">
        <div className="outerTitleContainer">
          <div className="titleContainer">
            <div className="innerTitleContainer">
              <h1 className="titleLetter">N</h1>
              <h1 className="titleLetter">o</h1>
              <h1 className="titleLetter">t</h1>
              <h1 className="titleLetter">e</h1>
              <h1 className="titleLetter transparent">I</h1>
              <h1 className="titleLetter">G</h1>
              <h1 className="titleLetter">o</h1>
              <h1 className="titleLetter">a</h1>
              <h1 className="titleLetter">t</h1>
            </div>
          </div>
          
          {/* <NavLink to="main" id="splashStart">Start</NavLink> */}
        </div>
        <button onClick={() => {handleAnimation()}}>Test Animation</button>
      </div>
    )
}