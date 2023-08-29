import { useEffect } from "react"
import { useOutletContext } from "react-router"

const DifficultySelector = (props) => {
    const outletContext = useOutletContext()
    const setDifficulty = outletContext.setDifficulty

    const handleSelectChange = (() => {
        let x = document.getElementById("difficultySelector").value
        setDifficulty(x)
    })

    useEffect(() => {
        setDifficulty("0")
    }, [])
    
    return ( 
        <div className="difficultySelector sightReadOptionContainer">
            <select id="difficultySelector" className="sightReadOption" onChange={handleSelectChange}>
                <option value="0">Novice</option>
                <option value="1">Advanced</option>
                <option value="2">Expert</option>
                <option value="3">GOAT</option>
            </select>
        </div>
     );
}
 
export default DifficultySelector;