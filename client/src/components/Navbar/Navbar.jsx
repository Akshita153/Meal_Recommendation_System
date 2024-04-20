import React, { useContext, useEffect, useState } from "react";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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
    navigate("/");
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

            <Link to="/about-us" className="navbar-brand brandd">
              About Us
            </Link>
            <Link to="/recipes" className="navbar-brand brandd">
              Recipes
            </Link>

            {/* <Link style={{textDecoration:"none"}}className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle navbar-brand brandd"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                Recipes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: "100px" }}>
                <li>
                  <Link
                    to="/recipes?category=Breakfast"
                    className="dropdown-item"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={(e) => e.target.parentElement.parentElement.style.backgroundColor = ""}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#e8e8e8"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = ""}
                  >
                    Breakfast
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recipes?category=Lunch"
                    className="dropdown-item"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={(e) => e.target.parentElement.parentElement.style.backgroundColor = ""}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#e8e8e8"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = ""}
                  >
                    Lunch
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recipes?category=Dinner"
                    className="dropdown-item"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={(e) => e.target.parentElement.parentElement.style.backgroundColor = ""}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#e8e8e8"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = ""}
                  >
                    Dinner
                  </Link>
                </li>
              </ul>
            </Link> */}

            {isLoggedin ? (
              <Link to="/meal" className="navbar-brand brandd">
                Meal
              </Link>
            ) : (
              ""
            )}

            {isLoggedin ? (
              <Link to="/profile" className="navbar-brand brandd">
                Profile
              </Link>
            ) : (
              ""
            )}

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
