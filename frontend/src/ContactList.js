import React, { useState, useEffect } from 'react';

function ContactList() {
    const [contacts, setContacts] = useState([]);

    // This useEffect hook will be executed once when the component mounts.
    useEffect(() => {
        // Fetch contacts from the backend API
        fetch('/api/contacts')
        .then(response => response.json())
        .then(data => setContacts(data))
        .catch(error => console.error("Error fetching contacts:", error));
    }, []);

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <a href={`/contact/${contact.id}`}>{contact.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
