import React from "react";
import HeaderBar from '../Components/HeaderBar';
import NavBar from '../Components/NavBar';
import Container from '../Components/Container';

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