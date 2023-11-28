import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import db from '../firebaseConfig';
import "react-datepicker/dist/react-datepicker.css";
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

// Tableau des membres
const Listing = () => {
  const [data, setData] = useState([]);
  const [originalData] = useState([]);

  // Options pour les selections
  const statusOptions = [
    { value: 'libre', label: 'Libre' },
    { value: 'indisponible', label: 'Indisponible' },
    { value: 'travail', label: 'Travail' }
  ];

  // Options pour les postes
  const posteOptions = [
    { value: 'membre_actif', label: 'Membre Actif' },
    { value: 'bureau', label: 'Bureau' }
    // TODO: Ajouter les autres postes
  ];

  // Options pour les campus
  const campusOption = [
    { value: 'lille', label: 'Lille' },
    { value: 'paris', label: 'Paris' },
    { value: 'laval', label: 'Laval' },
    { value: 'toulouse', label: 'Toulouse' },
    { value: 'bordeaux', label: 'Bordeaux' },
    { value: 'thonon', label: 'Thonon-les-Bains' }
    // TODO: Ajouter les autres campus
  ];

  useEffect(() => {
    // recupere les données depuis Firebase
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Users'));
      const users = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setData(users);
      originalData.current = users;
    };

    fetchData();
  }, [originalData]);

  // Mise a jour des donnees dans le tableau
  const updateMyData = (rowIndex, columnId, value) => {
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // enregistre les modifications dans Firebase
  const saveData = async () => {
    const membersCollection = collection(db, 'Users');
    for (const row of data) {
      const docRef = doc(membersCollection, row.id);
      await setDoc(docRef, row);
    }
  };

  // Colonnes pour react-table
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'last-name',
        Cell: ({ value, row }) => (
          <input
            value={value}
            onChange={e => updateMyData(row.index, 'last-name', e.target.value)}
          />
        ),
      },
      {
        Header: 'Prénom',
        accessor: 'name',
        Cell: ({ value, row }) => (
          <input
            value={value}
            onChange={e => updateMyData(row.index, 'name', e.target.value)}
          />
        ),
      },
      {
        Header: 'Cohorte',
        accessor: 'cohorte',
        Cell: ({ value, row }) => (
          <input
            value={value}
            onChange={e => updateMyData(row.index, 'cohorte', e.target.value)}
          />
        ),
      },
      {
        Header: 'Campus',
        accessor: 'campus',
        Cell: ({ value, row }) => (
          <Select
            options={campusOption}
            defaultValue={campusOption.find(option => option.value === value)}
            onChange={e => updateMyData(row.index, 'campus', e.value)}
          />
        ),
      },
      {
        Header: 'Poste',
        accessor: 'poste',
        Cell: ({ value, row }) => (
          <Select
            options={posteOptions}
            defaultValue={posteOptions.find(option => option.value === value)}
            onChange={e => updateMyData(row.index, 'poste', e.value)}
          />
        ),
      },
      {
        Header: 'Statut',
        accessor: 'status',
        Cell: ({ value, row }) => (
          <Select
            options={statusOptions}
            defaultValue={statusOptions.find(option => option.value === value)}
            onChange={e => updateMyData(row.index, 'status', e.value)}
          />
        ),
      },
      {
        Header: 'Github',
        accessor: 'github',
        Cell: ({ value, row }) => (
          <input
            value={value}
            onChange={e => updateMyData(row.index, 'github', e.target.value)}
          />
        ),
      },
      {
        Header: 'Disponibilité',
        accessor: 'disponibilite',
        Cell: ({ value, row }) => {
          let startDate = value && value.startDate ? new Date(value.startDate) : null;
          let endDate = value && value.endDate ? new Date(value.endDate) : null;
      
          // gere les dates invalides
          startDate = startDate && !isNaN(startDate.getTime()) ? startDate : null;
          endDate = endDate && !isNaN(endDate.getTime()) ? endDate : null;
      
          return (
            <div>
              <DatePicker
                selected={startDate}
                onChange={date => updateMyData(row.index, 'disponibilite', { ...value, startDate: date })}
              />
              <DatePicker
                selected={endDate}
                onChange={date => updateMyData(row.index, 'disponibilite', { ...value, endDate: date })}
              />
            </div>
          );
        },
      }              
    ],
    [],
    [posteOptions, statusOptions]
  );

  const addNewRow = () => {
    const newRow = {
      'last-name': '', // Valeur par défaut pour le prénom
      'name': '', // Valeur par défaut pour le nom
      'cohorte': '', // Valeur par défaut pour la cohorte
      'poste': '', // Valeur par défaut pour le poste
      'status': '', // Valeur par défaut pour le statut
      'disponibilite': { startDate: null, endDate: null } // Valeur par défaut pour la disponibilité
    };
    setData([...data, newRow]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={saveData}>Enregistrer les modifications</button>
      <button onClick={addNewRow}>Ajouter une ligne</button>
    </div>
  );
};

export default Listing;
