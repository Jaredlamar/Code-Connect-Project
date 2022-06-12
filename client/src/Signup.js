import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/layout";

function Signup({ setCurrentUser, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [toggle, setToggle] = useState(false);
  const [errors, setErrors] = useState([]);
  

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleSignup(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((userData) => setCurrentUser(userData))
          .then(navigate("/main"));
      } else {
        res.json().then((err) => alert("Username Already Used"));
      }
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((user) => setCurrentUser(user))
          .then(navigate("/main"));
      } else {
        res.json().then((err) => alert(err.error));
      }
    });
  }

  let navigate = useNavigate();

  return (
    <>
      <div className="body">
      <div className="container" id="container">
        {!toggle ? (
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignup}>
              <h1>Create Account</h1>
              <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit">Register</button>
            </form>
            
          </div>
        ) : (
          <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit"></button>
            </form>
          </div>
        )}
       <p className="toggle-container"> <button className="bttn" onClick={handleToggle}>{ !toggle ?  "Already Signed Up ? Click  to Login" : "No Account? Click to sign up" } </button></p>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left"></div>
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Signup;
