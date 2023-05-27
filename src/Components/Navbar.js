import { Link } from "react-router-dom"

 export const NavBar = () => {
    return (
        <nav className="nav">
        <div className="header">
            <h1>Website Header</h1>
        </div>
        <ul>
            <li>
            <Link className="navigation" to="/">Signup</Link>
            </li>
            <li>
            <Link className="navigation" to="/profile">Profile</Link>
            </li>
        </ul>

        {/* <div className="header-options">
            <Link to="/">Signup</Link>
            <Link to="/profile">Profile</Link>
        </div> */}
    </nav>
    )
}