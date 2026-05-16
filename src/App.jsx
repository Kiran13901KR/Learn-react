import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../App.css";

const AppLayout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = (username, password) => {
  //   const isValid = username === "admin" && password === "admin123";
  //   setLoggedIn(isValid);
  //   return isValid;
  // };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  // };

  return (
    <div className="page">
      <Header  />
      {/* loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} */}
      <div className="body-area">
        {/* {loggedIn ? ( */}
          <Body />
        {/* // ) : (
        //   <div className="login-prompt">Please login to view restaurant data.</div>
        // )} */}
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
