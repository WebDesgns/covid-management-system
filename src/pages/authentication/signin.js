import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/signin.scss";

function Signin() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password === "" || emailAddress === "";

    function handleSignIn(event) {
        event.preventDefault();
        setEmailAddress("");
        setPassword("");
    }

    return (
        <>
            <div className="signin-background">
                <div className="signin-container">
                    <h1 className="title">Sign In</h1>
                    {error && <div className="error">{error}</div>}
                    <form
                        className="base"
                        onSubmit={handleSignIn}
                        method="POST"
                    >
                        <input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        ></input>
                        <button disabled={isInvalid} type="submit">
                            Sign In
                        </button>
                    </form>

                    <Link className="link" to="/Signup">
                        Create a new account
                    </Link>
                    <p className="smalltext">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signin;
