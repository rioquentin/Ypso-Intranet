import React from "react";
import HeaderBar from '../Components/HeaderBar/HeaderBar';
import Container from '../Components/HomeContainer/Container';
import NavBar from '../Components/NavBar/NavBar';

function Home() {
    return (
        <div className='main'>
        <div className='sideBar'>
            <NavBar/>
        </div>
        <div className='page'>
                <HeaderBar className='headerBar'name="Quentin"/>
                <Container className='container'/>
        </div>

    </div>
    );
}

export default Home;
