import React, { useState } from 'react';

function AddContact() {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        }).then(response => {
            if (response.ok) {
                alert('Contact added successfully');
                setName('');
            } else {
                alert('Error adding contact');
            }
        });
    }

    return (
        <div>
            <h2>Add New Contact</h2>
            <input 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="Enter contact name" 
            />
            <button onClick={handleSubmit}>Add Contact</button>
        </div>
    );
}

export default AddContact;
