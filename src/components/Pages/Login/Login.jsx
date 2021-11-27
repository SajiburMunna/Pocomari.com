import React from "react";
import "./Login.css";
import soildlogo from "../../../Assets/solidlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <>
      <div className="full-login-content">
        <div className=" login-container">
          <h2> </h2>
          <form>
            <div class="row">
              <div className="login-logo">
                <img src={soildlogo} width="100px" height="100px" alt="" />
              </div>

              <div class="vl">
                <span class="vl-innertext">or</span>
              </div>

              <div class="col">
                <a href="##" class="fb btn">
                  <FacebookIcon />
                  <span>Login with Facebook</span>
                </a>
                <a href="##" class="twitter btn">
                  <TwitterIcon />
                  <span> Login with Twitter</span>
                </a>
                <a href="##" class="google btn">
                  <GoogleIcon /> <span>Login with Google</span>
                </a>
              </div>

              <div class="col">
                <div class="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

                <input
                  type="email"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>

          <div class="bottom-container">
            <div class="row">
              <div class="col">
                <a href="##" class="btn">
                  Sign up
                </a>
              </div>
              <div class="col">
                <a href="##" class="btn">
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
