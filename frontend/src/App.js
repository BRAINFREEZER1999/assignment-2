



import React from 'react'; // Ensure you import React
import { useState, useEffect } from 'react';  
import './App.css';
import ContactList from './ContactList';  // import ContactList component

function App() {
    return (
        <div>     
            <h1>Contactor</h1>
            <ContactList />   // include the ContactList component here
        </div>
    );
}

export default App;
