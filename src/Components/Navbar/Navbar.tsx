import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Art</Link>
            <Link className="nav-link" to="/flashsheets">Flashsheets</Link>
            <Link className="nav-link" to="/crochet">Crochet</Link>
            <Link className="nav-link" to="/tattoo">Tattoo</Link>
            <Link className="nav-link" to="/digital">Digital</Link>
        </nav>
    );
}

export default Navbar;
