import React from "react";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign In To Manage Your Store's Inventory </p>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Login With Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate("Google")}>
      Login With Gmail
    </button>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login With Github
    </button>
  </nav>
);

export default Login;
