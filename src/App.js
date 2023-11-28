import './App.css';
import HeaderBar from './Components/HeaderBar';
import NavBar from './Components/NavBar';
import Container from './Components/Container';
import listing from './Components/listing';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';



function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default App;
