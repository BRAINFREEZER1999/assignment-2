import React, { useState, useEffect } from 'react';

function ContactDetail({ match }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const contactId = match.params.contactId;
        
        fetch(`http://localhost:5000/contacts/${contactId}`)
            .then(response => response.json())
            .then(data => setContact(data))
            .catch(error => console.error('Error fetching contact:', error));
    }, [match.params.contactId]);

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{contact.name}</h1>
            <h2>Phone Numbers</h2>
            <ul>
                {contact.phones.map(phone => (
                    <li key={phone.id}>
                        {phone.name}: {phone.number}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactDetail;
