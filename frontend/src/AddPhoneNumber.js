import React, { useState } from 'react';

function AddPhoneNumber({ match }) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = () => {
        fetch(`http://localhost:5000/contacts/${match.params.contactId}/phones`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number: phoneNumber })
        }).then(response => {
            if (response.ok) {
                alert('Phone number added successfully');
                setPhoneNumber('');
            } else {
                alert('Error adding phone number');
            }
        });
    }

    return (
        <div>
            <h2>Add Phone Number</h2>
            <input 
                value={phoneNumber} 
                onChange={e => setPhoneNumber(e.target.value)} 
                placeholder="Enter phone number" 
            />
            <button onClick={handleSubmit}>Add PhoneNumber</button>
        </div>
    );
}

export default AddPhoneNumber;
