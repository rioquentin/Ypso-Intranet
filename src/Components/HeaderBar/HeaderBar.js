import { faBars, faBell, faEnvelope, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { toggleSidebar } from '../../utils/ToggleSidebar.js'
import "./HeaderBar.css";

function NavBar(props) {
  return (
    <header className="header-bar" id='header-bar'>
        <div className="burger">
            <button onClick={toggleSidebar} className="menu"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></button>
        </div>
        <a href="/" className="logo">YPSO</a>
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="icons">
            <a href="/"><FontAwesomeIcon icon={faHome} style={{color: "#ffffff",}} /></a>
            <a href="/"><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /></a>
            <a href="/"><FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} /></a>
        </div>
        <div className="usr">
            <FontAwesomeIcon icon={faUserCircle} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#ffffff",}} />
            <p>{props.name}</p>
        </div>

    </header>
  );
}

export default NavBar;
