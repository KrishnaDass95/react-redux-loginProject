

const Signup = () => {

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
        </>
    )

}

export default Signup;