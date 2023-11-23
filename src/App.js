import './App.scss';
import Layout from './layouts/RootLayout/Layout.js';
import Home from './pages/Home/Home.js';
import Messages from './pages/Messages/Messages.js';
import Profile from './pages/Profile/Profile.js';
import Settings from './pages/Settings/Settings.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>

    <Routes>

          <Route index element={<Home />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='messages' element={<Messages />}/>
          <Route path='settings' element={<Settings />}/>
    </Routes>
    </Layout>
  );
}

export default App;
