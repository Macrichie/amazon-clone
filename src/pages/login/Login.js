import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase-config/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const login = (e) => {
    e.preventDefault();
    // do login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    // do register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create a user and log in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>

      <div class="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail (phone for mobile accounts)</h5>
          <input
            value={email}
            type="email"
            ref={inputElement}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's{" "}
          <a className="terms" href="#">
            Conditions of Use & Sale
          </a>
          . Please see our{" "}
          <a className="terms" href="#">
            Privacy Notice
          </a>
          , our{" "}
          <a className="terms" href="#">
            Cookies Notice
          </a>{" "}
          and our{" "}
          <a className="terms" href="#">
            Interest-Based Ads Notice
          </a>
          .
        </p>
        <p>
          <a href="#" className="help">
            Need Help?
          </a>
        </p>
      </div>
      <div class="logon">
        <p className="new">New to Amazon?</p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
      </div>
    </div>
  );
}

export default Login;
