import { NavLink } from "react-router-dom"

const BackButton = () => {
    return ( 
        <div className="backButtonContainer">
            <NavLink to="/main" className="backButton">Back</NavLink>
        </div>
     );
}
 
export default BackButton;