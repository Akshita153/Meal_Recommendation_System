import React from "react";
import Icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
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
            <Link to='/about-us' className="navbar-brand brandd" href="/">
              About Us
            </Link>
            <form className="d-flex" role="search">
              <Link to="/login" className="btn btn-outline-primary btn-color">
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
