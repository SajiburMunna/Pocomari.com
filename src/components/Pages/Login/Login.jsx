/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./Login.css";
import soildlogo from "../../../Assets/solidlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

import { requestAddNewUser } from "../../../store/action/userAction.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

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

  const setRegValue = (key, e) => {
    setSignUpInfo({ ...signUpInfo, [key]: e.target.value });
  };
  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(requestAddNewUser(signUpInfo));
    console.log(signUpInfo);
  };

  return (
    <>
      <div className="full-login-content">
        <div className=" login-container">
          <form onSubmit={handleSignUp}>
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
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

                <input
                  type="email"
                  name="username"
                  placeholder="Email"
                  required
                  value={signUpInfo.email}
                  onChange={(e) => setRegValue("email", e)}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  value={signUpInfo.username}
                  onChange={(e) => setRegValue("username", e)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={signUpInfo.password}
                  onChange={(e) => setRegValue("password", e)}
                />
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>

          <div className="bottom-container">
            <div className="row">
              <div className="col">
                <a href="##" className="btn">
                  Sign up
                </a>
              </div>
              <div className="col">
                <a href="##" className="btn">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
