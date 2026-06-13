import React, { useContext } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Toggle from "./Toggle";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = ({ loggedIn, onLogin, onLogout }) => {

    const { theme, setTheme } = useContext(userContext);
    console.log("theme", userContext);
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
  const onlineStatus=useOnlineStatus();
  console.log("onlineStatus", onlineStatus);



  const handleToggle = () => setTheme(prev => !prev);

const cart = useSelector((store) => store.cart.itemCart);

console.log("cart", cart);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        
            <h5>Online Status : {onlineStatus ? "🟢" : "🔴"}</h5>
            <Link to="/" className="cart-link">Home</Link>
        
         
            <Link to="/About" className="cart-link">About Us</Link>
          
          
             <Link to="/Contact" className="cart-link">Contact</Link>
          
         
            <Link to="/Cart" className="cart-link">
            🛒  {cart.length} 
            </Link> 
            
            <Link to="/Grocery" className="cart-link">Grocery</Link>
           
        <button className="login-Header">Login</button>
        <Toggle isOn={theme} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Header;
