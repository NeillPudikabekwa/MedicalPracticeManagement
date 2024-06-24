import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginForm} />
                {/* Add other routes here */}
            </Switch>
        </Router>
    );
}

export default App;
