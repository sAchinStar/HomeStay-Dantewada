import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from"../Assets/logo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary myNavstyle">
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/"> */}
                <img src={logo} alt="logo" className="nav_logo" />
                {/* </Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item ">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book">Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listings">Listings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/status-page">Status</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login-page">Admin</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;