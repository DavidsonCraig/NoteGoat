const DifficultySelector = (props) => {
    const handleSelectChange = (() => {
        let x = document.getElementById("difficultySelector").value
        props.setDifficulty(x)
    })
    return ( 
        <div className="difficultySelector">
            <select id="difficultySelector" onChange={handleSelectChange}>
                <option value="novice">Novice</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
                <option value="goat">GOAT</option>
            </select>
        </div>
     );
}
 
export default DifficultySelector;