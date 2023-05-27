import React from "react";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {

    return(
        <>
        <nav>
            <div className="header">
                Header
            </div>
            <div className="header-options">
                <Link to="/">Signup</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Signup />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>
        </>
    )
}

export default App;