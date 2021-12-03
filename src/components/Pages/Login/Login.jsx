/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./Login.css";
import soildlogo from "../../../Assets/solidlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { requestAddNewUser } from "../../../store/action/userAction.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSignIn,
  setToken,
  setError,
} from "./../../../store/action/authAction";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const [loginError, setLoginError] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.persistedStorage);
  console.log(currentUser);
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });

  const setSignInValue = (key, e) => {
    setSignInInfo({ ...signInInfo, [key]: e.target.value });
  };

  const setRegValue = (key, e) => {
    setSignUpInfo({ ...signUpInfo, [key]: e.target.value });
  };

  // const { error } = useSelector((state) => state.persistedStorage);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(requestAddNewUser(signUpInfo));
    setSignUpForm(false);
    console.log(signUpInfo);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(requestSignIn(signInInfo));

    axios.post("http://localhost:8080/signin", signInInfo).then(({ data }) => {
      if (data.message === "Logged in Successfully") {
        dispatch(setToken(data));
        setLoginError(false);
        navigate("/");
        setSignUpForm(false);
      } else {
        dispatch(setError(data.message));
        setLoginError(data.message);
      }
    });
  };

  return (
    <>
      <div className="full-login-content">
        <div className=" login-container">
          <form onSubmit={signUpForm ? handleSignUp : handleSignIn}>
            <div className="row">
              <div className="login-logo">
                <img src={soildlogo} width="100px" height="100px" alt="" />
              </div>

              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>

              <div className="col">
                <a href="##" className="fb btn">
                  <FacebookIcon />
                  <span>Login with Facebook</span>
                </a>
                <a href="##" className="twitter btn">
                  <TwitterIcon />
                  <span> Login with Twitter</span>
                </a>
                <a href="##" className="google btn">
                  <GoogleIcon /> <span>Login with Google</span>
                </a>
              </div>

              <div className="col">
                <p style={{ color: "red" }}>
                  {!signUpForm ? loginError : null}
                </p>
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

                <input
                  type="email"
                  name="username"
                  placeholder="Email"
                  required
                  value={signUpForm ? signUpInfo.email : signInInfo.email}
                  onChange={(e) =>
                    signUpForm
                      ? setRegValue("email", e)
                      : setSignInValue("email", e)
                  }
                />
                {signUpForm ? (
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    value={signUpInfo.username}
                    onChange={(e) => setRegValue("username", e)}
                  />
                ) : null}

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={signUpForm ? signUpInfo.password : signInInfo.password}
                  onChange={(e) =>
                    signUpForm
                      ? setRegValue("password", e)
                      : setSignInValue("password", e)
                  }
                />
                <input type="submit" value={signUpForm ? "SignUp" : "Signin"} />
              </div>
            </div>
          </form>

          <div className="bottom-container">
            <div className="row">
              <div className="col">
                <p className="btn">
                  {signUpForm ? (
                    <p onClick={() => setSignUpForm(false)}>Signin</p>
                  ) : (
                    <p onClick={() => setSignUpForm(true)}>SignUp</p>
                  )}
                </p>
              </div>
              <div className="col">
                <p className="btn">Forgot password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
