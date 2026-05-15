import React from "react";
import LOGO_URL from "../utils/constants";


 const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        <button className="login-Header">Login</button>
      </div>
    </div>
  );
};

export default Header;
