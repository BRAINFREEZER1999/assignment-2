import React, { useState, useEffect } from 'react';

function ContactDetail({ match }) {
    const [contact, setContact] = useState(null);
    const [phoneName, setPhoneName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        fetchContact();
    }, [match.params.contactId]);

    const fetchContact = () => {
        const contactId = match.params.contactId;
        fetch(`http://localhost:5000/contacts/${contactId}`)
            .then(response => response.json())
            .then(data => setContact(data))
            .catch(error => console.error('Error fetching contact:', error));
    };

    const createPhoneNumber = () => {
        const contactId = match.params.contactId;
        fetch(`http://localhost:5000/contacts/${contactId}/phones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: phoneName, number: phoneNumber })
        })
        .then(response => response.json())
        .then(data => {
            fetchContact();
            setPhoneName('');
            setPhoneNumber('');
        })
        .catch(error => console.error('Error creating phone number:', error));
    };

    const deletePhoneNumber = (phoneId) => {
        fetch(`http://localhost:5000/contact/${match.params.contactId}/phones/${phoneId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            fetchContact();
        })
        .catch(error => console.error('Error deleting phone number:', error));
    };

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{contact.name}</h1>
            <div>
                <input 
                    value={phoneName} 
                    onChange={(e) => setPhoneName(e.target.value)} 
                    placeholder="Phone Name" 
                />
                <input 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    placeholder="Phone Number" 
                />
                <button onClick={createPhoneNumber}>Add Phone Number</button>
            </div>
            <h2>Phone Numbers</h2>
            <ul>
                {contact.phones.map(phone => (
                    <li key={phone.id}>
                        {phone.name}: {phone.number}
                        <button onClick={() => deletePhoneNumber(phone.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactDetail;
