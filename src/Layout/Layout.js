import HeaderBar from "../Components/HeaderBar/HeaderBar";
import NavBar from "../Components/NavBar/NavBar";
import './Layout.css';

const Layout = ({children}) => {
    return (
        <div className='main'>
            <div className='sideBar'>
                <NavBar/>
            </div>
            <div className='page'>
                    <HeaderBar className='headerBar'name="Quentin"/>
                    <div className="pageContent">
                        {children}

                    </div>
            </div>

        </div>
    )
}

export default Layout;

export function toggleMenu() {
    var sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle("sidebar-open");
    console.log("toggle");
}
