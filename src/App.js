import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Messages from './pages/Messages.js';
import Profile from './pages/Profile.js';
import Settings from './pages/Settings.js';




function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/messages' element={<Messages />}/>
        <Route path='/settings' element={<Settings />}/>
    </Routes>
  );
}

export default App;
