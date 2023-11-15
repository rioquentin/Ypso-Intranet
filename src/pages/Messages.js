import React from "react";
import HeaderBar from '../Components/HeaderBar/HeaderBar';
import NavBar from '../Components/NavBar/NavBar';

function Messages() {
    return (
        <div className='main'>
        <div className='sideBar'>
            <NavBar/>
        </div>
        <div className='page'>
                <HeaderBar className='headerBar'name="Quentin"/>
				<h1>Messages</h1>
        </div>

    </div>
    );
}

export default Messages;
