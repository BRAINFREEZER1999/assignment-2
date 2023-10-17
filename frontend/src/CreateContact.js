import React, { useState } from 'react';

function CreateContact() {
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            await fetch('http://localhost:5000/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name }),
            });
            setName('');  // Clear the input after successful submission
        } catch (error) {
            console.error('Failed to create contact:', error);
        }
    };

    return (
        <div>
            <h2>Create New Contact</h2>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Contact Name" />
            <button onClick={handleSubmit}>Create</button>
        </div>
    );
}

export default CreateContact;
