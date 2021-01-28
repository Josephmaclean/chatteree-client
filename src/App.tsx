import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'
import './assets/styles/config.scss'
import ConfirmPhoneNumber from './pages/confirmPhoneNumber/ConfirmPhoneNumber';
import CreateId from './pages/createId/CreateId';
import ProfileSetup from './pages/profileSetup/profileSetup';

import Signup from './pages/signup/Signup'

function App() {
  return (
    <>
    <Router>
      <Route path="/confirm-number" component={ConfirmPhoneNumber} />
      <Route path="/create-id" component={CreateId} />
      <Route path="/setup-profile" component={ProfileSetup} />
      <Route exact path="/" component={Signup} />
    </Router>
    </>
  );
}

export default App;
