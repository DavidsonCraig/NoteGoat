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
    const noteOn = outletContext.noteOn
    const noteOff = outletContext.noteOff

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
                    <div className="whiteNote" id="mn36" onMouseDown={(() => {noteOn(36,100)})} onMouseUp={(() => {noteOff(36)})} onMouseLeave={(() => {noteOff(36)})}></div>
                    <div className="whiteNote" id="mn38" onMouseDown={(() => {noteOn(38,100)})} onMouseUp={(() => {noteOff(38)})} onMouseLeave={(() => {noteOff(38)})}></div>
                    <div className="whiteNote" id="mn40" onMouseDown={(() => {noteOn(40,100)})} onMouseUp={(() => {noteOff(40)})} onMouseLeave={(() => {noteOff(40)})}></div>
                    <div className="whiteNote" id="mn41" onMouseDown={(() => {noteOn(41,100)})} onMouseUp={(() => {noteOff(41)})} onMouseLeave={(() => {noteOff(41)})}></div>
                    <div className="whiteNote" id="mn43" onMouseDown={(() => {noteOn(43,100)})} onMouseUp={(() => {noteOff(43)})} onMouseLeave={(() => {noteOff(43)})}></div>
                    <div className="whiteNote" id="mn45" onMouseDown={(() => {noteOn(45,100)})} onMouseUp={(() => {noteOff(45)})} onMouseLeave={(() => {noteOff(45)})}></div>
                    <div className="whiteNote" id="mn47" onMouseDown={(() => {noteOn(47,100)})} onMouseUp={(() => {noteOff(47)})} onMouseLeave={(() => {noteOff(47)})}></div>
                    {/* Octave 3 */}
                    <div className="whiteNote" id="mn48" onMouseDown={(() => {noteOn(48,100)})} onMouseUp={(() => {noteOff(48)})} onMouseLeave={(() => {noteOff(48)})}></div>
                    <div className="whiteNote" id="mn50" onMouseDown={(() => {noteOn(50,100)})} onMouseUp={(() => {noteOff(50)})} onMouseLeave={(() => {noteOff(50)})}></div>
                    <div className="whiteNote" id="mn52" onMouseDown={(() => {noteOn(52,100)})} onMouseUp={(() => {noteOff(52)})} onMouseLeave={(() => {noteOff(52)})}></div>
                    <div className="whiteNote" id="mn53" onMouseDown={(() => {noteOn(53,100)})} onMouseUp={(() => {noteOff(53)})} onMouseLeave={(() => {noteOff(53)})}></div>
                    <div className="whiteNote" id="mn55" onMouseDown={(() => {noteOn(55,100)})} onMouseUp={(() => {noteOff(55)})} onMouseLeave={(() => {noteOff(55)})}></div>
                    <div className="whiteNote" id="mn57" onMouseDown={(() => {noteOn(57,100)})} onMouseUp={(() => {noteOff(57)})} onMouseLeave={(() => {noteOff(57)})}></div>
                    <div className="whiteNote" id="mn59" onMouseDown={(() => {noteOn(59,100)})} onMouseUp={(() => {noteOff(59)})} onMouseLeave={(() => {noteOff(59)})}></div>
                    {/* Octave 4 */}
                    <div className="whiteNote" id="mn60" onMouseDown={(() => {noteOn(60,100)})} onMouseUp={(() => {noteOff(60)})} onMouseLeave={(() => {noteOff(60)})}></div>
                    <div className="whiteNote" id="mn62" onMouseDown={(() => {noteOn(62,100)})} onMouseUp={(() => {noteOff(62)})} onMouseLeave={(() => {noteOff(62)})}></div>
                    <div className="whiteNote" id="mn64" onMouseDown={(() => {noteOn(64,100)})} onMouseUp={(() => {noteOff(64)})} onMouseLeave={(() => {noteOff(64)})}></div>
                    <div className="whiteNote" id="mn65" onMouseDown={(() => {noteOn(65,100)})} onMouseUp={(() => {noteOff(65)})} onMouseLeave={(() => {noteOff(65)})}></div>
                    <div className="whiteNote" id="mn67" onMouseDown={(() => {noteOn(67,100)})} onMouseUp={(() => {noteOff(67)})} onMouseLeave={(() => {noteOff(67)})}></div>
                    <div className="whiteNote" id="mn69" onMouseDown={(() => {noteOn(69,100)})} onMouseUp={(() => {noteOff(69)})} onMouseLeave={(() => {noteOff(69)})}></div>
                    <div className="whiteNote" id="mn71" onMouseDown={(() => {noteOn(71,100)})} onMouseUp={(() => {noteOff(71)})} onMouseLeave={(() => {noteOff(71)})}></div>
                    {/* Octave 5 */}
                    <div className="whiteNote" id="mn72" onMouseDown={(() => {noteOn(72,100)})} onMouseUp={(() => {noteOff(72)})} onMouseLeave={(() => {noteOff(72)})}></div>
                    <div className="whiteNote" id="mn74" onMouseDown={(() => {noteOn(74,100)})} onMouseUp={(() => {noteOff(74)})} onMouseLeave={(() => {noteOff(74)})}></div>
                    <div className="whiteNote" id="mn76" onMouseDown={(() => {noteOn(76,100)})} onMouseUp={(() => {noteOff(76)})} onMouseLeave={(() => {noteOff(76)})}></div>
                    <div className="whiteNote" id="mn77" onMouseDown={(() => {noteOn(77,100)})} onMouseUp={(() => {noteOff(77)})} onMouseLeave={(() => {noteOff(77)})}></div>
                    <div className="whiteNote" id="mn79" onMouseDown={(() => {noteOn(79,100)})} onMouseUp={(() => {noteOff(79)})} onMouseLeave={(() => {noteOff(79)})}></div>
                    <div className="whiteNote" id="mn81" onMouseDown={(() => {noteOn(81,100)})} onMouseUp={(() => {noteOff(81)})} onMouseLeave={(() => {noteOff(81)})}></div>
                    <div className="whiteNote" id="mn83" onMouseDown={(() => {noteOn(83,100)})} onMouseUp={(() => {noteOff(83)})} onMouseLeave={(() => {noteOff(83)})}></div>
                    {/* Octave 6 */}
                    <div className="whiteNote" id="mn84" onMouseDown={(() => {noteOn(84,100)})} onMouseUp={(() => {noteOff(84)})} onMouseLeave={(() => {noteOff(84)})}></div>
                    <div className="whiteNote" id="mn86" onMouseDown={(() => {noteOn(86,100)})} onMouseUp={(() => {noteOff(86)})} onMouseLeave={(() => {noteOff(86)})}></div>
                    <div className="whiteNote" id="mn88" onMouseDown={(() => {noteOn(88,100)})} onMouseUp={(() => {noteOff(88)})} onMouseLeave={(() => {noteOff(88)})}></div>
                    <div className="whiteNote" id="mn89" onMouseDown={(() => {noteOn(89,100)})} onMouseUp={(() => {noteOff(89)})} onMouseLeave={(() => {noteOff(89)})}></div>
                    <div className="whiteNote" id="mn91" onMouseDown={(() => {noteOn(91,100)})} onMouseUp={(() => {noteOff(91)})} onMouseLeave={(() => {noteOff(91)})}></div>
                    <div className="whiteNote" id="mn93" onMouseDown={(() => {noteOn(93,100)})} onMouseUp={(() => {noteOff(93)})} onMouseLeave={(() => {noteOff(93)})}></div>
                    <div className="whiteNote" id="mn95" onMouseDown={(() => {noteOn(95,100)})} onMouseUp={(() => {noteOff(95)})} onMouseLeave={(() => {noteOff(95)})}></div>
                </div>
                <div className="blackNotes">
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn37" onMouseDown={(() => {noteOn(37,100)})} onMouseUp={(() => {noteOff(37)})} onMouseLeave={(() => {noteOff(37)})}></div>
                    <div className="blackNote" id="mn39" onMouseDown={(() => {noteOn(39,100)})} onMouseUp={(() => {noteOff(39)})} onMouseLeave={(() => {noteOff(39)})}></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn42" onMouseDown={(() => {noteOn(42,100)})} onMouseUp={(() => {noteOff(42)})} onMouseLeave={(() => {noteOff(42)})}></div>
                    <div className="blackNote" id="mn44" onMouseDown={(() => {noteOn(44,100)})} onMouseUp={(() => {noteOff(44)})} onMouseLeave={(() => {noteOff(44)})}></div>
                    <div className="blackNote" id="mn46" onMouseDown={(() => {noteOn(46,100)})} onMouseUp={(() => {noteOff(46)})} onMouseLeave={(() => {noteOff(46)})}></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn49" onMouseDown={(() => {noteOn(49,100)})} onMouseUp={(() => {noteOff(49)})} onMouseLeave={(() => {noteOff(49)})}></div>
                    <div className="blackNote" id="mn51" onMouseDown={(() => {noteOn(51,100)})} onMouseUp={(() => {noteOff(51)})} onMouseLeave={(() => {noteOff(51)})}></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn54" onMouseDown={(() => {noteOn(54,100)})} onMouseUp={(() => {noteOff(54)})} onMouseLeave={(() => {noteOff(54)})}></div>
                    <div className="blackNote" id="mn56" onMouseDown={(() => {noteOn(56,100)})} onMouseUp={(() => {noteOff(56)})} onMouseLeave={(() => {noteOff(56)})}></div>
                    <div className="blackNote" id="mn58" onMouseDown={(() => {noteOn(58,100)})} onMouseUp={(() => {noteOff(58)})} onMouseLeave={(() => {noteOff(58)})}></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn61" onMouseDown={(() => {noteOn(61,100)})} onMouseUp={(() => {noteOff(61)})} onMouseLeave={(() => {noteOff(61)})}></div>
                    <div className="blackNote" id="mn63" onMouseDown={(() => {noteOn(63,100)})} onMouseUp={(() => {noteOff(63)})} onMouseLeave={(() => {noteOff(63)})}></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn66" onMouseDown={(() => {noteOn(66,100)})} onMouseUp={(() => {noteOff(66)})} onMouseLeave={(() => {noteOff(66)})}></div>
                    <div className="blackNote" id="mn68" onMouseDown={(() => {noteOn(68,100)})} onMouseUp={(() => {noteOff(68)})} onMouseLeave={(() => {noteOff(68)})}></div>
                    <div className="blackNote" id="mn70" onMouseDown={(() => {noteOn(70,100)})} onMouseUp={(() => {noteOff(70)})} onMouseLeave={(() => {noteOff(70)})}></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn73" onMouseDown={(() => {noteOn(73,100)})} onMouseUp={(() => {noteOff(73)})} onMouseLeave={(() => {noteOff(73)})}></div>
                    <div className="blackNote" id="mn75" onMouseDown={(() => {noteOn(75,100)})} onMouseUp={(() => {noteOff(75)})} onMouseLeave={(() => {noteOff(75)})}></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn78" onMouseDown={(() => {noteOn(78,100)})} onMouseUp={(() => {noteOff(78)})} onMouseLeave={(() => {noteOff(78)})}></div>
                    <div className="blackNote" id="mn80" onMouseDown={(() => {noteOn(80,100)})} onMouseUp={(() => {noteOff(80)})} onMouseLeave={(() => {noteOff(80)})}></div>
                    <div className="blackNote" id="mn82" onMouseDown={(() => {noteOn(82,100)})} onMouseUp={(() => {noteOff(82)})} onMouseLeave={(() => {noteOff(82)})}></div>
                    <div className="blackNote halfSpacer"></div>
                    {/* Octave 2 */}
                    <div className="blackNote halfSpacer"></div>
                    <div className="blackNote" id="mn85" onMouseDown={(() => {noteOn(85,100)})} onMouseUp={(() => {noteOff(85)})} onMouseLeave={(() => {noteOff(85)})}></div>
                    <div className="blackNote" id="mn87" onMouseDown={(() => {noteOn(87,100)})} onMouseUp={(() => {noteOff(87)})} onMouseLeave={(() => {noteOff(87)})}></div>
                    <div className="blackNote fullSpacer"></div>
                    <div className="blackNote" id="mn90" onMouseDown={(() => {noteOn(90,100)})} onMouseUp={(() => {noteOff(90)})} onMouseLeave={(() => {noteOff(90)})}></div>
                    <div className="blackNote" id="mn92" onMouseDown={(() => {noteOn(92,100)})} onMouseUp={(() => {noteOff(92)})} onMouseLeave={(() => {noteOff(92)})}></div>
                    <div className="blackNote" id="mn94" onMouseDown={(() => {noteOn(94,100)})} onMouseUp={(() => {noteOff(94)})} onMouseLeave={(() => {noteOff(94)})}></div>
                    <div className="blackNote halfSpacer"></div>
                </div>
            </div>
        </div>
     );
}
 
export default PianoHelper;