import React from "react";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import {Routes, Route} from 'react-router-dom'

const App = () => {

    return(
        <>
        <nav>
            <div className="header">
                Header
            </div>
            <div className="header-options">
                <a href="#">Signup</a>
                <a href="#">Profile</a>
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