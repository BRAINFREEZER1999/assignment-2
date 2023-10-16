


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={ContactList} />
                <Route path="/contact/:contactId" component={ContactDetail} />
            </div>
        </Router>
    );
}

export default App;
