import './App.scss';
import Layout from './layouts/RootLayout/Layout.js';
import Home from './pages/Home/Home.js';
import Messages from './pages/Messages/Messages.js';
import Profile from './pages/Profile/Profile.js';
import Settings from './pages/Settings/Settings.js';

import Treasury from './pages/Treasury/Treasury.js';
import Dashboard from './pages/Treasury/components/Dashboard/Dashboard';
import Expenses from './pages/Treasury/components/Expenses/Expenses';
import Invoices from './pages/Treasury/components/Invoices/Invoices';
import Quotes from './pages/Treasury/components/Quotes/Quotes';
import Reports from './pages/Treasury/components/Reports/Reports';
import Revenues from './pages/Treasury/components/Revenues/Revenues';
import Clients from './pages/Treasury/components/Clients/Clients';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Layout>

      <Routes>
        <Route index element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='messages' element={<Messages />} />
        <Route path='settings' element={<Settings />} />

        <Route path='treasury' element={<Treasury />} />
        <Route path='treasury/dashboard' element={<Dashboard />} />
        <Route path='treasury/expenses' element={<Expenses />} />
        <Route path='treasury/invoices' element={<Invoices />} />
        <Route path='treasury/quotes' element={<Quotes />} />
        <Route path='treasury/reports' element={<Reports />} />
        <Route path='treasury/revenues' element={<Revenues />} />
        <Route path='treasury/clients' element={<Clients />} />
      </Routes>
    </Layout>
  );
}

export default App;
