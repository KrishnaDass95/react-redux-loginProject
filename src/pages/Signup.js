import { useSelector, useDispatch } from "react-redux";
import { LOGIN } from "../actions/actionsType";
import { useState, useEffect } from 'react';

const Signup = () => {

    const loginState = useSelector(state => state);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        console.log(loginState);
      }, [loginState]);

    function signUp(){

        if(!userName || !email || !password || !confirmPassword){
            alert('fields are empty');
        }
        if(confirmPassword != password){
            alert('password does not match confirm password');
        }

        // dispatch the info to reducer store
        dispatch({
            type: LOGIN,
            payload: {
                name: userName,
                email,
                password
            }
        })
        console.log(loginState);

    }

    return(
        <>
        <div className="container">
        <h1>Signup</h1>
        <input 
        type="text"
        placeholder="Full Name"
        onChange={(e) => setUserName(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        />

        <input 
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="login-message">
            <p>
                {/* error message */}
            </p>
        </div>
        <button onClick={signUp}>Signup</button>
        </div>

        </>
    )

}

export default Signup;