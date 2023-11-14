import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="menu">
            <div className="title">
                <h1>Menu</h1>   
            </div>
            <div className="list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;