import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
