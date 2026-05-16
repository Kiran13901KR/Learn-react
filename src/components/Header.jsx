import React from "react";
import LOGO_URL from "../utils/constants";

const Header = ({ loggedIn, onLogin, onLogout }) => {
  // const formLogin = () => {
  //   if (loggedIn) {
  //     onLogout();
  //     return;
  //   }

  //   const username = prompt("Enter your username:");
  //   if (username === null) return;

  //   const password = prompt("Enter your password:");
  //   if (password === null) return;

  //   const success = onLogin(username, password);
  //   if (success) {
  //     alert("Login successful!");
  //   } else {
  //     alert("Invalid credentials. Please try again.");
  //   }
  // };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        <button className="login-Header" >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
