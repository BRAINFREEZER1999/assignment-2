import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import AddContact from './AddContact'; 
import AddPhoneNumber from './AddPhoneNumber'; 
import Statistics from './components/Statistics';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Statistics />
                    <Route path="/" exact component={ContactList} />
                    <Route path="/contact/:contactId" component={ContactDetail} />
                    <Route path="/add-contact" component={AddContact} /> 
                    <Route path="/contact/:contactId/add-phone" component={AddPhoneNumber} /> 
                </Switch>
            </div>
        </Router>
    );
}

export default App;
