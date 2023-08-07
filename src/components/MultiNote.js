import abcjs from "abcjs";
import { useEffect, useState } from "react";

export default function SingleNote() {
    const [abcnotation, setAbcnotation] = useState("X:1\nK:D\nDD AA|[BG]BA2|\n");
    let currentNote = 0;

    //initial render
    useEffect(() => {
        abcjs.renderAbc("paper", abcnotation, {add_classes: true, responsive: "resize"});
    },[])

    //subsequent render
    abcjs.renderAbc("paper", abcnotation);

    const fillNote = () => {
      let x = document.querySelector(`.abcjs-note[data-index='${currentNote}']`)
      x && x.classList.add('filled')
      currentNote += 1
    }
    
    return (
      <div className="singleNote">
        <div id="paper"></div>
        <button onClick={fillNote}>Fill Note</button>
      </div>
    )
}