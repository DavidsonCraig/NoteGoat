import anime from "animejs";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Splash() {

  const handleTitleAnimation = (() => {
    anime({
      targets: ".titleLetter",
      translateY: "-110vh",
      delay: anime.stagger(100)
    })
  })

  const handleStartButtonAnimation = (() => {
    anime({
      targets: '#splashStart',
      translateY: "-90vh",
      rotate: '1turn'
    });
  })


  useEffect(() => {
    setTimeout(handleTitleAnimation, 1000)
    setTimeout(handleStartButtonAnimation, 2500)
  }, [])
  
    return (
      <div className="splash">
        <div className="outerTitleContainer">
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
          <NavLink to="main" id="splashStart">Start</NavLink>
        </div>
      </div>
    )
}