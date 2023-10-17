import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;


