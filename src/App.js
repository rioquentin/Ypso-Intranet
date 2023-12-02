
import './App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// db Firebase
import db from './firebaseConfig';
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

import Layout from './layouts/RootLayout/Layout.js';
import Home from './pages/Home/Home.js';
import Messages from './pages/Messages/Messages.js';
import Profile from './pages/Profile/Profile.js';
import Settings from './pages/Settings/Settings.js';

// Treasury pages
import Treasury from './pages/Treasury/Treasury.js';
import Dashboard from './pages/Treasury/components/Dashboard/Dashboard';
import Expenses from './pages/Treasury/components/Expenses/Expenses';
import Invoices from './pages/Treasury/components/Invoices/Invoices';
import Quotes from './pages/Treasury/components/Quotes/Quotes';
import Reports from './pages/Treasury/components/Reports/Reports';
import Revenues from './pages/Treasury/components/Revenues/Revenues';
import Clients from './pages/Treasury/components/Clients/ListClients';
import NewClientForm from './pages/Treasury/components/Clients/NewClientForm';


function App() {
  const [clients, setClients] = useState([]);

  // Add a customer to Firestore
  const addClient = async (newClient) => {
    try {
      await addDoc(collection(db, "clients"), newClient);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Update a client in Firestore
  const updateClient = async (clientId, updatedClient) => {
    try {
      const clientRef = doc(db, "clients", clientId);
      await updateDoc(clientRef, updatedClient);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // Delete a client from Firestore
  const deleteClient = async (clientId) => {
    try {
      await deleteDoc(doc(db, "clients", clientId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Loads real-time customer data from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "clients"), (snapshot) => {
      const clientsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setClients(clientsData);
    });

    return () => unsubscribe();
  }, []);

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

        <Route path='treasury/clients' element={<Clients clients={clients} deleteClient={deleteClient} />} />
        <Route path='treasury/clients/newClientForm' element={<NewClientForm addClient={addClient} clients={clients} />} />
        <Route path='treasury/clients/:clientId' element={<NewClientForm updateClient={updateClient} clients={clients} />} />
      </Routes>
    </Layout>
  );
}

export default App;
