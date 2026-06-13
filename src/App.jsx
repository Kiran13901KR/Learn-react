import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import "../App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { UserProvider } from "./utils/userContext";
import { useContext } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
const { theme } = useContext(userContext);

  // const handleLogin = (username, password) => {
  //   const isValid = username === "admin" && password === "admin123";
  //   setLoggedIn(isValid);
  //   return isValid;
  // };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  // };

  return (
    <div className={`page ${theme ? "dark" : "light"}`}>
        <Header />
        {/* loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} */}
        <div className="body-area">
          {/* {loggedIn ? (
            <Body />
          {/* // ) : (
          //   <div className="login-prompt">Please login to view restaurant data.</div>
          // )} */}
          <Outlet />
        </div>

        <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/Restaurents/:resid",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <RouterProvider router={appRouter} />
  </UserProvider>
);
