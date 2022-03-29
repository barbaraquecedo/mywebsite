import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border border-bottom">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Bárbara Quecedo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/cv">CV</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                    <a className="btn btn-primary" href="mailto:barbaraquecedo@gmail.com?body=My custom mail body">Get in touch</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;