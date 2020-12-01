import React, { useEffect, useState } from "react";

import "./Login.css";
import wavingPikachu from "../../img/waving-pikachu.png";
import thorEndgame from "../../img/thor-endgame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { auth, gProvider, fProvider } from "../../fire";

function Login() {
  const [elementsObj, setElementsObj] = useState({});
  const [userObj, setUserObj] = useState({});

  const addSignUpMode = () => {
    elementsObj.container.classList.add("sign-up-mode");
  };

  const remSignUpMode = () => {
    elementsObj.container.classList.remove("sign-up-mode");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({ userObj });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ userObj });
  };

  const handleAuthLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    switch (e.currentTarget.value) {
      case "google":
        auth.signInWithPopup(gProvider).catch((err) => alert(err.message));
        break;
      case "facebook":
        console.log("facebook auth");
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setElementsObj({
      container: document.querySelector(".login"),
    });
  }, []);

  return (
    <div className="login">
      <div className="forms-container">
        <div className="signin-signup">
          {/* sign in */}
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setUserObj({ ...userObj, username: e.target.value })
                }
              />
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setUserObj({ ...userObj, password: e.target.value })
                }
              />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <button
              type="submit"
              value="Login"
              className="button"
              onClick={handleSignIn}
            >
              Login
            </button>
            {/* social sign in */}
            <p className="social-text">Or Sign In with social platforms</p>
            <div className="social-media">
              <button className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </form>
          {/* sign up */}
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setUserObj({ ...userObj, username: e.target.value })
                }
              />
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setUserObj({ ...userObj, email: e.target.value })
                }
              />
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setUserObj({ ...userObj, password: e.target.value })
                }
              />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <button
              type="submit"
              value="Sign up"
              className="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            {/* social sign up */}
            <p className="social-text">Or Sign Up with social platforms</p>
            <div className="social-media">
              <button
                className="social-icon"
                value="facebook"
                onClick={handleAuthLogin}
              >
                <FontAwesomeIcon icon={faFacebookF} value="facebook" />
              </button>
              <button
                className="social-icon"
                value="google"
                onClick={handleAuthLogin}
              >
                <FontAwesomeIcon icon={faGoogle} value="google" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>Sign up for everything Funko.</p>
            <button
              className="button transparent"
              id="sign-up-btn"
              onClick={addSignUpMode}
            >
              Sign Up
            </button>
          </div>
          <img src={wavingPikachu} alt="waving funko" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in for everything Funko.</p>
            <button
              className="button transparent"
              id="sign-in-btn"
              onClick={remSignUpMode}
            >
              Sign In
            </button>
          </div>
          <img src={thorEndgame} alt="waving funko" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
