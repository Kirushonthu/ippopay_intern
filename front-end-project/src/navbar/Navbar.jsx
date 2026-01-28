import { Link } from "react-router-dom";
import "./Navbar .css";
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <h1>stripe</h1>
            <ul className="nav-links">
                <Link to="/Products">Products</Link>
                <Link to="/Solutions">Solutions </Link>
                <Link to="/Developers">Developers</Link>
                <Link to="/Resources">Resources</Link>
                <Link to="/Pricing">Pricing</Link>
                <Link to="/Signin">Sign in</Link>

            </ul>
        </nav>
    )
}

export default Navbar