import { useSelector, useDispatch } from "react-redux";
import { useRef } from 'react';

const Signup = () => {

    const loginState = useSelector(state => state);
    const dispatch = useDispatch();

    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");

    function signUp(){
        const name = nameRef.current;
        const email = emailRef.current;
        const password = passwordRef.current;
        const confirmPassword = confirmPasswordRef.current;

        if (!name || !email || !password || !confirmPassword) {
            alert("Please enter all the required fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("The passwords do not match");
            return;
        }



    }

    return(
        <>
        <div className="container">
        <h1>Signup</h1>
        <input 
        type="text"
        placeholder="Full Name"
        ref={nameRef}
        />
        <input 
        type="text"
        placeholder="Email"
        ref={emailRef}
        />
        <input 
        type="password"
        placeholder="Password"
        ref={passwordRef}
        />
        <input 
        type="password"
        placeholder="Confirm Password"
        ref={confirmPasswordRef}
        />
        <div className="login-message">
            {/* enter login message here */}
            <p></p>
        </div>
        <button onClick={signUp}>Signup</button>
        </div>

        </>
    )

}

export default Signup;