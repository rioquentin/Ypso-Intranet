import React from "react";
import HeaderBar from '../Components/HeaderBar';
import NavBar from '../Components/NavBar';
import Container from '../Components/Container';
import Listing from '../Components/listing';

function Home() {
    return (
        <div className='main'>
        <div className='sideBar'>
            <NavBar/>
        </div>
        <div className='page'>
                <HeaderBar className='headerBar'name="Quentin"/>
                <Listing className='listing'/>
        </div>
        
    </div>
    );
}

export default Home;