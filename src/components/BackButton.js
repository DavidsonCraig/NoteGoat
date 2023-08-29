import { NavLink } from "react-router-dom"

const BackButton = () => {
    return ( 
        <div className="backButtonContainer">
            <NavLink to="/NoteGoat/main" className="backButton">Back</NavLink>
        </div>
     );
}
 
export default BackButton;