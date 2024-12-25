import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            className="rounded-circle me-2"
            style={{ width: "50px", height: "50px" }}
          />
          <span className="fw-bold text-primary">TOURISM HOMESTAY</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listings">
                Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login-page">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
