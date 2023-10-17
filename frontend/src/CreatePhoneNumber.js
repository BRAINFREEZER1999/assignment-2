import React, { useState, useEffect } from 'react';

function CreatePhoneNumber() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/contacts')
            .then(res => res.json())
            .then(setContacts);
    }, []);

    const handleSubmit = async () => {
        try {
            await fetch(`http://localhost:5000/contacts/${selectedContact}/phones`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ number }),
            });
            setNumber('');  // Clear the input
        } catch (error) {
            console.error('Failed to add phone number:', error);
        }
    };

    return (
        <div>
            <h2>Add Phone Number</h2>
            <select value={selectedContact} onChange={e => setSelectedContact(e.target.value)}>
                {contacts.map(contact => <option key={contact.id} value={contact.id}>{contact.name}</option>)}
            </select>
            <input value={number} onChange={e => setNumber(e.target.value)} placeholder="Phone Number" />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default CreatePhoneNumber;
