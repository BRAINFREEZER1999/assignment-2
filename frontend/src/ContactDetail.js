import React, { useState, useEffect } from 'react';

function ContactDetail({ match }) {
    const [contact, setContact] = useState({});
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        const fetchContact = async () => {
            let response = await fetch(`/api/contacts/${match.params.contactId}`);
            let data = await response.json();
            setContact(data);
            
            response = await fetch(`/api/contacts/${match.params.contactId}/phones`);
            data = await response.json();
            setPhones(data);
        };

        fetchContact();
    }, [match.params.contactId]);

    return (
        <div>
            <h2>{contact.name}</h2>
            <ul>
                {phones.map(phone => (
                    <li key={phone.id}>{phone.name}: {phone.number}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContactDetail;
