import { Link } from "react-router-dom"

 export const NavBar = () => {
    return (
        <nav>
        <div className="header">
            Header
        </div>
        <div className="header-options">
            <Link to="/">Signup</Link>
            <Link to="/profile">Profile</Link>
        </div>
    </nav>
    )
}