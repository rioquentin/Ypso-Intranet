import HeaderBar from "../../components/HeaderBar/HeaderBar";
import NavBar from "../../components/NavBar/NavBar";
import './Layout.scss';

const Layout = ({children}) => {
    return (
        <div className='main'>
            <div className='sidebar'>
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

