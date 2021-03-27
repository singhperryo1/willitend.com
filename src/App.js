import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from "./components/Copyright.js";
import CreateAccount from "./components/CreateAccount.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js"; 
import React from 'react';
import Subscription from "./components/Subscription.js";
import VaccineAnectdotes from "./components/VaccineAnectdotes.js";


function App() {
  return (
  	<Router> 
    
    	<Navbar />

    	<Switch>

    	<Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/CreateAccount">
          <CreateAccount />
        </Route>

        <Route exact path="/StayUpdated">
          <Subscription />
        </Route>

        <Route exact path="/VaccineAnectdotes">
          <VaccineAnectdotes />
        </Route>

         {/* If user try to access a invalid page,
                    redirect user to Homepage.
                */}
        <Redirect to="/"/>

    	</Switch>

    <Box mt={5}>
    	<Copyright />
    </Box>

    </Router> 
  );
}

export default App;

