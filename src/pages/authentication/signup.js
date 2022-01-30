import React, { useState} from "react";
import { Link } from "react-router-dom";


import "./styles/signup.scss";

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const isInvalid =
        firstName === "" || password === "" || emailAddress === "";

    const handleSignIn = (event) => {
        event.preventDefault();
            setFirstName("");
            setEmailAddress("");
            setPassword("");
            
    }

    return (
        
            
            <>  
                <div className="background">
                <div className="signup-container">
                    <h1 className="title">Sign Up</h1>
                    {error && <div className="error">{error}</div>}
                    <form
                        className="base"
                        onSubmit={handleSignIn}
                        method="POST"
                    >
                        <input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }>
                        </input>
                        <input
                            placeholder="Email Address"
                            autoComplete="off"
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }>
                            </input>
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}>
                            </input>
                        <button disabled={isInvalid} type="submit">
                            Sign Up
                        </button>
                    </form>
                   <Link className="link" to="/Signin">
                            Already a user?
                    </Link> 
                    
                </div>
                </div>         
            </> 
    );
}

export default Signup;
