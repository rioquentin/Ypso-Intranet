import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import db from '../../../../firebaseConfig';
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import './ListClients.scss';


/**
 * This file is the Clients component, which displays a list of clients.
 * It fetches the client data from the database and allows sorting the list by contact name, company name, and creation date.
 * The component uses React hooks to manage state and handle navigation.
 */
function Clients() {
  const [clients, setClients] = useState([]);
  const [sortConfigContact, setSortConfigContact] = useState({ key: 'nomFamille', direction: 'ascending' });
  const [sortConfigSociete, setSortConfigSociete] = useState({ key: 'nomSociete', direction: 'ascending' });
  const [sortConfigDateCreation, setSortConfigDateCreation] = useState({ key: 'dateCreation', direction: 'ascending' });
  const navigate = useNavigate();

  // Hook to fetch the list of clients from the database
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "clients"), (snapshot) => {
      const clientsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setClients(clientsData);
    });

    return () => unsubscribe();
  }, []);

  // Hook to sort the list of clients by contact name
  useEffect(() => {
    let sortedClients = [...clients];
    if (sortConfigContact !== null) {
      sortedClients.sort((a, b) => {
        if (a[sortConfigContact.key] < b[sortConfigContact.key]) {
          return sortConfigContact.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfigContact.key] > b[sortConfigContact.key]) {
          return sortConfigContact.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setClients(sortedClients);
    // eslint-disable-next-line
  }, [sortConfigContact]);

  // Hook to sort the list of clients by company name
  useEffect(() => {
    let sortedClients = [...clients];
    if (sortConfigSociete !== null) {
      sortedClients.sort((a, b) => {
        if (a[sortConfigSociete.key] < b[sortConfigSociete.key]) {
          return sortConfigSociete.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfigSociete.key] > b[sortConfigSociete.key]) {
          return sortConfigSociete.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setClients(sortedClients);
    // eslint-disable-next-line
  }, [sortConfigSociete]);

  // Hook to sort the list of clients by creation date
  useEffect(() => {
    let sortedClients = [...clients];
    if (sortConfigDateCreation !== null) {
      sortedClients.sort((a, b) => {
        const dateA = new Date(
          Number(a[sortConfigDateCreation.key].split('/')[2]),
          Number(a[sortConfigDateCreation.key].split('/')[1]) - 1,
          Number(a[sortConfigDateCreation.key].split('/')[0])
        );

        const dateB = new Date(
          Number(b[sortConfigDateCreation.key].split('/')[2]),
          Number(b[sortConfigDateCreation.key].split('/')[1]) - 1,
          Number(b[sortConfigDateCreation.key].split('/')[0])
        );

        if (dateA < dateB) {
          return sortConfigDateCreation.direction === 'ascending' ? -1 : 1;
        }
        if (dateA > dateB) {
          return sortConfigDateCreation.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setClients(sortedClients);
    // eslint-disable-next-line
  }, [sortConfigDateCreation]);

  // Hook to sort the list of clients by contact name
  const requestSortContact = (key) => {
    let direction = 'ascending';
    if (sortConfigContact.key === key && sortConfigContact.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigContact({ key, direction });
  };

  // Function to handle sorting the list of clients by company name
  const requestSortSociete = (key) => {
    let direction = 'ascending';
    if (sortConfigSociete.key === key && sortConfigSociete.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigSociete({ key, direction });
  };

  // Function to handle sorting the list of clients by creation date
  const requestSortDateCreation = (key) => {
    let direction = 'ascending';
    if (sortConfigDateCreation.key === key && sortConfigDateCreation.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigDateCreation({ key, direction });
  };

  // Function to delete a client
  const handleDeleteClientClick = async (clientId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
      try {
        await deleteDoc(doc(db, "clients", clientId));
      } catch (error) {
        console.error("Error deleting client: ", error);
      }
    }
  };

  // Function to navigate to the form for creating a new client
  const handleNewClientClick = () => {
    navigate('/treasury/clients/newClientForm');
  };

  // Function to navigate to the form for editing a client
  const handleEditClientClick = (clientId) => {
    navigate(`/treasury/clients/${clientId}`);
  };

  return (
    <div className="clients-container">
      <div className='clients-header'>
        <h1>Liste des Clients</h1>
        <button className='buttonListing' onClick={handleNewClientClick}>+ Nouveau Client</button>
      </div>
      <table className='clients-table'>
        <thead>
          <tr>
            <th onClick={() => requestSortContact('nomFamille')}>
              <span>Contact</span>
              <span className="sort-icon">
                {sortConfigContact.key === 'nomFamille' ? (sortConfigContact.direction === 'ascending' ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />) : null}
              </span>
            </th>
            <th onClick={() => requestSortSociete('nomSociete')}>
              <span>Nom de l'entreprise</span>
              <span className="sort-icon">
                {sortConfigSociete.key === 'nomSociete' ? (sortConfigSociete.direction === 'ascending' ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />) : null}
              </span>
            </th>
            <th>E-mail</th>
            <th>Téléphone</th>
            <th onClick={() => requestSortDateCreation('dateCreation')}>
              <span>Date de création</span>
              <span className="sort-icon">
                {sortConfigDateCreation.key === 'dateCreation' ? (sortConfigDateCreation.direction === 'ascending' ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />) : null}
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.prenom} {client.nomFamille}</td>
              <td>{client.nomSociete}</td>
              <td>{client.email}</td>
              <td>{client.telephone}</td>
              <td>{client.dateCreation}</td>
              <td>
                <button className="icon-button" onClick={() => handleEditClientClick(client.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="icon-button" onClick={() => handleDeleteClientClick(client.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
