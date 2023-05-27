import React from "react";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Routes, Route, Link } from 'react-router-dom'
import { NavBar } from "./Components/Navbar";

const App = () => {

    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Signup />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>
        </>
    )
}

export default App;