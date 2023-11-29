import { faBars, faBell, faEnvelope, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import toggleMenu from '../script.js';
import "./HeaderBar.css";
import { Link } from "react-router-dom";
import AuthLogin from "../Login/AuthLogin.js";
import AuthProfile from "../Login/AuthProfile.js";
import AuthLogout from "../Login/AuthLogout.js";
import {Auth0Provider} from "@auth0/auth0-react";

function NavBar(props) {
  return (
    <header className="header-bar" id='header-bar'>

        <div className="burger">
            <a onClick={toggleMenu} className="menu"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></a>
        </div>

        <a href="#" className="logo">YPSO</a>
        <input type="text" className="search-bar" placeholder="Search" />

        <div className="icons">
            <a href="#"><FontAwesomeIcon icon={faHome} style={{color: "#ffffff",}} /></a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /></a>
            <a href=""><FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} /></a>
        </div>

        <div className="usr">
        <FontAwesomeIcon icon={faUserCircle} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#ffffff",}} />
        <Auth0Provider
                domain="dev-m47mu2bvpvwkeaq1.us.auth0.com"
                clientId="V09MOT4DfJbq1Smr31FkUNs2fPOMDeid"
                authorizationParams={{
                redirect_uri: window.location.origin
                }}
            >
            <AuthProfile></AuthProfile>
            <AuthLogout></AuthLogout>
        </Auth0Provider>
        </div>

    </header>
  );
}

export default NavBar;
