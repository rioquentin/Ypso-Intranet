import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
    return (
        <div className="menu">
            <div className="title">
                <h1>Menu</h1>
            </div>
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/messages">Messages</Link></li>
                    <li><Link to="/treasury">Treasury</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>

            </div>
        </div>
    );
}

export default NavBar;
