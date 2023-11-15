import React from "react";
import HeaderBar from '../Components/HeaderBar/HeaderBar';
import NavBar from '../Components/NavBar/NavBar';
import ProfileContainer from "../Components/ProfileContainer/ProfileContainer";

function Profile() {
    return (
        <div className='main'>
        <div className='sideBar'>
            <NavBar/>
        </div>
        <div className='page'>
                <HeaderBar className='headerBar'name="Quentin"/>
				<ProfileContainer className='profileContainer'/>
        </div>

    </div>
    );
}

export default Profile;
