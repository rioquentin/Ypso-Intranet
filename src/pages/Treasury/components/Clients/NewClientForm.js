import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewClientForm.scss';

/**
 * This component represents a form for creating a new client or editing an existing client.
 * It handles the input fields for client information such as client type, title, first name, last name,
 * company name, email, and telephone number. It also provides validation for the email and telephone fields.
 * The form can be submitted to add a new client or update an existing client.
 *
 * Props:
 * - addClient: A function to add a new client.
 * - updateClient: A function to update an existing client.
 * - clients: An array of existing clients.
 */
function NewClientForm({ addClient, updateClient, clients }) {
	const navigate = useNavigate();
	const { clientId } = useParams();
	const isEditMode = clientId != null;

	// Local state for the client data.
	const [clientData, setClientData] = useState({
		clientType: '',
		titre: '',
		prenom: '',
		nomFamille: '',
		nomSociete: '',
		email: '',
		telephone: ''
	});

	// Local state to manage form validation errors.
	const [errors, setErrors] = useState({});

	// Effect to load client data in edit mode.
	useEffect(() => {
		if (isEditMode && clients) {
			const clientToEdit = clients.find(client => client.id === clientId);
			if (clientToEdit) {
				setClientData(clientToEdit);
			}
		}
	}, [clientId, clients, isEditMode]);

	// Function to handle changes in the form fields.
	const handleChange = (e) => {
		let { name, value } = e.target;

		if (['prenom', 'nomFamille', 'nomSociete'].includes(name)) {
			value = capitalizeFirstLetter(value);
		}

		if (name === 'telephone') {
			value = formatPhoneNumber(value);
		}

		setClientData({ ...clientData, [name]: value });
	};

	const capitalizeFirstLetter = (string) => {
		if (!string) return '';
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const formatPhoneNumber = (number) => {
		number = number.replace(/\D/g, '').substring(0, 10);
		return number.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5').trim();
	};

	const validateData = () => {
		let errors = {};
		let formIsValid = true;

		if (!clientData.email) {
			formIsValid = false;
			errors["email"] = "L'email ne peut pas être vide.";
		} else if (!/\S+@\S+\.\S+/.test(clientData.email)) {
			formIsValid = false;
			errors["email"] = "L'email n'est pas valide.";
		}

		if (!clientData.telephone) {
			formIsValid = false;
			errors["telephone"] = "Le numéro de téléphone ne peut pas être vide.";
		} else if (!/^\d{2} \d{2} \d{2} \d{2} \d{2}$/.test(clientData.telephone)) {
			formIsValid = false;
			errors["telephone"] = "Le numéro de téléphone n'est pas valide.";
		}

		setErrors(errors);
		return formIsValid;
	};

	// Handles the form submission.
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateData()) {
			if (clients && !clientId) {
				const existingClient = checkIfClientExists();
				if (existingClient) {
					setErrors({
						...errors,
						submit: "Un client avec ces informations existe déjà."
					});
					return;
				}
			}

			// Update or add a client.
			if (clientId) {
				updateClient(clientId, clientData);
			} else {
				addClient({
					...clientData,
					dateCreation: new Date().toLocaleDateString()
				});
			}
			navigate('/treasury/clients');
		}
	};

	const checkIfClientExists = () => {
		return clients.find(client =>
			client.email === clientData.email &&
			client.nomFamille === clientData.nomFamille &&
			client.prenom === clientData.prenom &&
			client.nomSociete === clientData.nomSociete
		);
	};

	const handleCancel = () => {
		navigate('/treasury/clients');
	};

	return (
		<div className="form-container">
			<h2>{isEditMode ? "Mise à Jour Client" : "Formulaire Nouveau Client"}</h2>
			{errors.submit && <div className="error">{errors.submit}</div>}
			<form onSubmit={handleSubmit}>
				<div className='radio-group'>
					<label>
						<input
							type="radio"
							name="clientType"
							value="Entreprise"
							checked={clientData.clientType === 'Entreprise'}
							onChange={handleChange}
						/> Entreprise
					</label>
					<label>
						<input
							type="radio"
							name="clientType"
							value="Particulier"
							checked={clientData.clientType === 'Particulier'}
							onChange={handleChange}
						/> Particulier
					</label>
				</div>
				<div>
					<select name="titre" value={clientData.titre} onChange={handleChange}>
						<option value="">Titre</option>
						<option value="M">M.</option>
						<option value="Mme">Mme.</option>
						<option value="Autre">Autre.</option>
					</select>
					<input
						name="prenom"
						value={clientData.prenom}
						onChange={handleChange}
						placeholder="Prénom"
						required
					/>
					<input
						name="nomFamille"
						value={clientData.nomFamille}
						onChange={handleChange}
						placeholder="Nom de famille"
						required
					/>
				</div>
				<div>
					<input
						name="nomSociete"
						value={clientData.nomSociete}
						onChange={handleChange}
						placeholder="Nom de la société"
						required
					/>
					<input
						type="email"
						name="email"
						value={clientData.email}
						onChange={handleChange}
						placeholder="E-mail"
						required
					/>
					{errors.email && <div className="error">{errors.email}</div>}
				</div>
				<div>
					<input
						name="telephone"
						value={clientData.telephone}
						onChange={handleChange}
						placeholder="Téléphone"
						required
					/>
					{errors.telephone && <div className="error">{errors.telephone}</div>}
				</div>
				<div className="form-buttons">
					<button type="submit">Enregistrer</button>
					<button type="button" onClick={handleCancel}>Annuler</button>
				</div>
			</form>
		</div>
	);
}

export default NewClientForm;
