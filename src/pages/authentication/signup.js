import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

import "./styles/signup.scss";

function Signup() {
  const { signup } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState('');
  

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();
    await signup(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: role,
          // photoURL: Math.floor(Math.random() * 5) + 1,
        });
        localStorage.setItem('authUser', JSON.stringify(result));
      })
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
        setRole('user')
      })
  };

  return (
    <>
      <div className="signup-background">
        <div className="signup-container">
          <h1 className="title">Sign Up</h1>
          {error && <div className="error">{error}</div>}
          <form className="base" onSubmit={handleSignUp}>
            <div className="role">
              <span className="role-label">Role :</span>
              <select
                value={role}
                onChange={({ target }) => setRole(target.value)}
              >
                <option className="options" value="user">User</option>
                <option className="options" value="society">Society</option>
                <option className="options" value="admin">Admin</option>
                <option className="options" value="hospital">Hospital</option>
              </select>
            </div>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            ></input>
            <input
              placeholder="Email Address"
              autoComplete="off"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
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
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
