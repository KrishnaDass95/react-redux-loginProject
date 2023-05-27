

const Signup = () => {

    return(
        <>
        <div className="container">
        <h1>Signup</h1>
        <input 
        type="text"
        placeholder="Full Name"
        />
        <input 
        type="text"
        placeholder="Email"
        />
        <input 
        type="password"
        placeholder="Password"
        />
        <input 
        type="password"
        placeholder="Confirm Password"
        />
        <div className="login-message">
            {/* enter login message here */}
            <p></p>
        </div>
        <button>Signup</button>
        </div>

        </>
    )

}

export default Signup;