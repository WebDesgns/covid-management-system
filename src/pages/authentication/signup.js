import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/signup.scss";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User");

    const isInvalid =
        firstName === "" || password === "" || emailAddress === "";

    const handleSignIn = (event) => {
        event.preventDefault();
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setRole("User");
    };

    return (
        <>
            <div className="signup-background">
                <div className="signup-container">
                    <h1 className="title">Sign Up</h1>
                    {/* {error && <div className="error">{error}</div>} */}
                    <form
                        className="base"
                        onSubmit={handleSignIn}
                        method="POST"
                    >
                        <div className="role">
                            <span className="role-label">Role :</span>
                            <select value={role} onChange={({ target }) => setRole(target.value)}>
                                <option value='User'>User</option>
                                <option value='Society'>Society</option>
                                <option value='Admin'>Admin</option>
                                <option value='Hospital'>Hospital</option>
                            </select>
                        </div>
                        <input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }
                        ></input>
                        <input
                            placeholder="Email Address"
                            autoComplete="off"
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
                            Sign Up
                        </button>
                    </form>
                    <p className="text">
                        Already a user?{" "}
                        <Link className="link" to="/signin">
                            Sign in now.
                        </Link>
                    </p>
                    <p className="smalltext">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signup;
