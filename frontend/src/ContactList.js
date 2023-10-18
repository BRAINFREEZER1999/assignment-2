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
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Contacts</h1>
            <div>
                <input 
                    value={newContactName} 
                    onChange={(e) => setNewContactName(e.target.value)} 
                    placeholder="New contact name" 
                />
                <button onClick={createContact}>Create</button>
            </div>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {contacts.map(contact => (
                    <li key={contact.id} style={{ padding: '10px 0', borderBottom: '1px solid #e1e1e1' }}>
                        <Link to={`/contact/${contact.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                            {contact.name}
                        </Link>
                        <button onClick={() => deleteContact(contact.id)} style={{ marginLeft: '20px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
