# Client Management Tool

## Introduction

The client management tool is designed to simplify the tracking and management of client information. This tool offers an intuitive user interface for managing client data, including adding, modifying, and deleting client information.

## Features

- **Client Display**: Overview of clients with Contact (First Name, Last Name), Company Name, Email, Phone, Creation Date, and Action (Edit, Delete).

- **Client Management**: Adding, editing, and deleting client information.

- **Sorting**: Sorting options by different criteria (name, company, or creation date) for better visibility of the data.

## Navigation

The tool uses React Router for navigation. Users can navigate between the client list views and the client add/edit form.

- **Client List**: Accessible via `/Treasury/components/Clients/ListClients`.

- **New Client Form**: Accessible via `/Treasury/components/Clients/NewClientForm`.

## Usage

### Clients Component (`ListClients.js`)

#### Description

The Clients component is designed to interact with the Firebase database to retrieve, display, and manage client data. This component offers an overview of clients, with features to sort, edit, and delete entries.

#### Technical Details of `ListClients.js`

- **Data Retrieval**:

  - Uses Firebase's `onSnapshot` to listen for real-time updates of the client collection.

  - With each update, the component receives the latest data, ensuring that the display is always synchronized with the database.

- **State Management with `useState`**:

  - Storing client data in local state via `useState`, allowing for reactive updating of the user interface.

  - Separate states for different sorting configurations (`sortConfigContact`, `sortConfigSociete`, `sortConfigDateCreation`), allowing the user to sort the list according to different criteria.

- **Data Sorting**:

  - Uses `useEffect` to react to changes in sorting configurations.

  - Implementation of custom sorting functions for each field (name, company, date), allowing for ascending or descending sorting.

  - Sorting is performed directly on the local state, ensuring optimal performance without requiring additional database queries.

- **Navigation and Actions**:

  - Uses `useNavigate` from React Router for navigation to the editing and creation forms for new clients.

  - Functions for deleting clients with user confirmation, and for navigation to the modification or addition of new client forms.

### New Client Form Component (`NewClientForm.js`)

#### Description

NewClientForm is a dynamic component that handles both adding new clients and editing existing ones. It incorporates validation features and interacts with Firebase for data recording.

#### Technical Details of `NewClientForm.js`

- **Form Management with `useState`**:

  - `useState` is used to manage the states of form fields and store validation errors.

  - Each form field is controlled, with its state updated on each user input.

- **Data Validation**:

  - Client-side validation to ensure data reliability before sending to Firebase.

  - Checks include the validity of the email address and the format of the phone number.

  - `checkIfClientExists` checks if a client with the same information already exists to avoid duplicates.

  - Custom error messages to guide the user in case of invalid data.

- **Edit and Create Mode**:

  - Detection of the mode (add or edit) based on the presence of a `clientId` in the route parameters.

  - In edit mode, the form is pre-filled with the selected client's data for modification.

- **Interaction with Firebase**:

  - In add mode, the form data is sent to Firebase to create a new entry in the client collection.

  - In edit mode, the update is applied to the existing entry corresponding to the `clientId`.

  - Error handling to deal with cases where communication with Firebase fails.
