import React from "react";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Routes, Route } from 'react-router-dom'
import { NavBar } from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {

    return(
        <>
        <Provider store={store}>
        <NavBar />
        <Routes>
            <Route path="/" element={<Signup />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>
        </Provider>
        </>
        
    )
}

export default App;