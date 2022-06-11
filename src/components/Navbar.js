import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../utils/categories.json';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [category] = useState(categories);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <header>
            <nav className="navbar">
                <Link to='' className="nav-title">Forum Anak IT</Link>
                <div className={click ? "navbar-collapse active" : "navbar-collapse"}>
                    <div className="navbar-close" onClick={handleClick}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <form action="" className="search" role="search">
                        <input type="search" name="search" id="search" placeholder="Search" autoComplete="off" maxLength="60" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link">Categories</Link>
                            <Dropdown categories={category} />
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" onClick={closeMenu}>Register</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-open" onClick={handleClick}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;