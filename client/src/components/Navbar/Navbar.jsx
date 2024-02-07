import React, { useContext, useEffect, useState } from "react";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  // Using context variables
  const { user, logout, setUser } = useContext(UserContext);

  const [isLoggedin, setIsLoggedin] = useState(false); // user login status

  // checking if user has logged in or not
  useEffect(() => {
    if (user) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [user]);

  // handling user logout
  const handleUserLogout = async () => {
    // deleting user obj from lcl storage
    logout();
    // deleting user obj from cookies
    await axios.post("/logout");
    setUser(null);
    alert("User log-out successful");
  };

  return (
    <div className="navbarr">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img className="icon" src={Icon} alt="" />
          <a className="navbar-brand brand" href="/">
            FitFuel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <a className="navbar-brand brandd" href="/aboutus">
              About Us
            </a>
            <form className="d-flex" role="search">
              {isLoggedin ? (
                <Link
                  onClick={handleUserLogout}
                  className="btn btn-outline-primary btn-color"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-outline-primary btn-color">
                  Login
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
