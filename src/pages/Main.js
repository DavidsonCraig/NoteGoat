import { NavLink } from "react-router-dom";

export default function Main(props) {

    return (
      <div className="main">
        <h1>Main</h1>
        <NavLink to="/sightread">Learn to read</NavLink>
        <br></br>
        <NavLink to="/performance">Learn to play</NavLink>
        <br></br>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    )
}