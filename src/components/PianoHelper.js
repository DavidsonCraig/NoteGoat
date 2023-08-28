import { useEffect } from "react";
import { useOutletContext } from "react-router";

const PianoHelper = (props) => {
    const highlightedNotes = props.highlightedNotes
    const combo = props.combo
    const showNotes = props.showNotes
    const highlightedColor = "#4ec091ff"
    const noteDownColor = "#c04e7eff"
    const whiteNoteColor = "#f2d8d8ff"
    const blackNoteColor = "#00274aff"

    const outletContext = useOutletContext()
    const notesDown = outletContext.notesDown

    const isValidNote = ((x) => {
        return x <= 95 && x >= 36
    })

    useEffect(() => {
        document.querySelectorAll(".whiteNote").forEach(element => element.style.backgroundColor = whiteNoteColor)
        document.querySelectorAll(".blackNote").forEach(element => element.style.backgroundColor = blackNoteColor)

        let notesDownArr = Object.keys(notesDown)

        for (let i=0; i < notesDownArr.length; i++) {
            if (isValidNote(notesDownArr[i])) {
            document.getElementById(`mn` + `${notesDownArr[i]}`).style.backgroundColor = noteDownColor
            }
        }

        if (combo === 0 || showNotes) {
            for (let i=0; i < highlightedNotes.length; i++) {
                document.getElementById(`mn` + `${highlightedNotes[i]}`).style.backgroundColor = highlightedColor
            }
        }
    }, [combo,highlightedNotes,notesDown])

    return ( 
        <div className="pianoHelperContainer">
            <div className="pianoHelperInnerContainer">
                <div className="whiteNotes">
                    {/* Octave 2 */}
                    <div className="whiteNote" id="mn36"></div>
                    <div className="whiteNote" id="mn38"></div>
                    <div className="whiteNote" id="mn40"></div>
                    <div className="whiteNote" id="mn41"></div>
                    <div className="whiteNote" id="mn43"></div>
                    <div className="whiteNote" id="mn45"></div>
                    <div className="whiteNote" id="mn47"></div>
                    {/* Octave 3 */}
                    <div className="whiteNote" id="mn48"></div>
                    <div className="whiteNote" id="mn50"></div>
                    <div className="whiteNote" id="mn52"></div>
                    <div className="whiteNote" id="mn53"></div>
                    <div className="whiteNote" id="mn55"></div>
                    <div className="whiteNote" id="mn57"></div>
                    <div className="whiteNote" id="mn59"></div>
                    {/* Octave 4 */}
                    <div className="whiteNote" id="mn60"></div>
                    <div className="whiteNote" id="mn62"></div>
                    <div className="whiteNote" id="mn64"></div>
                    <div className="whiteNote" id="mn65"></div>
                    <div className="whiteNote" id="mn67"></div>
                    <div className="whiteNote" id="mn69"></div>
                    <div className="whiteNote" id="mn71"></div>
                    {/* Octave 5 */}
                    <div className="whiteNote" id="mn72"></div>
                    <div className="whiteNote" id="mn74"></div>
                    <div className="whiteNote" id="mn76"></div>
                    <div className="whiteNote" id="mn77"></div>
                    <div className="whiteNote" id="mn79"></div>
                    <div className="whiteNote" id="mn81"></div>
                    <div className="whiteNote" id="mn83"></div>
                    {/* Octave 6 */}
                    <div className="whiteNote" id="mn84"></div>
                    <div className="whiteNote" id="mn86"></div>
                    <div className="whiteNote" id="mn88"></div>
                    <div className="whiteNote" id="mn89"></div>
                    <div className="whiteNote" id="mn91"></div>
                    <div className="whiteNote" id="mn93"></div>
                    <div className="whiteNote" id="mn95"></div>
                </div>
                <div className="blackNotes">
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn37"></div>
                    <div className="blackNote" id="mn39"></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn42"></div>
                    <div className="blackNote" id="mn44"></div>
                    <div className="blackNote" id="mn46"></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn49"></div>
                    <div className="blackNote" id="mn51"></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn54"></div>
                    <div className="blackNote" id="mn56"></div>
                    <div className="blackNote" id="mn58"></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn61"></div>
                    <div className="blackNote" id="mn63"></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn66"></div>
                    <div className="blackNote" id="mn68"></div>
                    <div className="blackNote" id="mn70"></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn73"></div>
                    <div className="blackNote" id="mn75"></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn78"></div>
                    <div className="blackNote" id="mn80"></div>
                    <div className="blackNote" id="mn82"></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn85"></div>
                    <div className="blackNote" id="mn87"></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn90"></div>
                    <div className="blackNote" id="mn92"></div>
                    <div className="blackNote" id="mn94"></div>
                    <div className="blackNote halfSpacer"></div>
                </div>
            </div>
        </div>
     );
}
 
export default PianoHelper;