import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [newContactName, setNewContactName] = useState('');

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        fetch('http://localhost:5000/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }

    const createContact = () => {
        fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newContactName })
        })
        .then(response => response.json())
        .then(data => {
            fetchContacts();
            setNewContactName('');
        })
        .catch(error => console.error('Error creating contact:', error));
    }

    const deleteContact = (contactId) => {
        fetch(`http://localhost:5000/api/contacts/${contactId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            fetchContacts();
        })
        .catch(error => console.error('Error deleting contact:', error));
    }

    return (
        <div>
            <h1>Contacts</h1>
            <div>
                <input 
                    value={newContactName} 
                    onChange={(e) => setNewContactName(e.target.value)} 
                    placeholder="New contact name" 
                />
                <button onClick={createContact}>Create</button>
            </div>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                        <button onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;


