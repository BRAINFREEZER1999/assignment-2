import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import AddContact from './AddContact'; // Import this
import AddPhoneNumber from './AddPhoneNumber'; // And this
import Statistics from './components/Statistics';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={ContactList} />
                    <Route path="/contact/:contactId" component={ContactDetail} />
                    <Route path="/add-contact" component={AddContact} /> // New route
                    <Route path="/contact/:contactId/add-phone" component={AddPhoneNumber} /> // New route
                </Switch>
            </div>
        </Router>
    );
}

export default App;
