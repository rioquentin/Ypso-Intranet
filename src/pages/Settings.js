import React from "react";
import HeaderBar from '../Components/HeaderBar/HeaderBar';
import NavBar from '../Components/NavBar/NavBar';

function Settings() {
    return (
        <div className='main'>
        <div className='sideBar'>
            <NavBar/>
        </div>
        <div className='page'>
                <HeaderBar className='headerBar'name="Quentin"/>
				<h1>Settings</h1>
        </div>

    </div>
    );
}

export default Settings;
