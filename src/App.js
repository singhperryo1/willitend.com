import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Copyright from "./components/Copyright.js";
import CreateAccount from "./components/CreateAccount.js";
import CreatePost from "./components/CreatePost.js";
import FAQ from "./components/FAQ.js";
import Grid from '@material-ui/core/Grid';
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js"; 
import PostDefault from "./components/PostDefault.js";
import React from 'react';
import Subscription from "./components/Subscription.js"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  
  const classes = useStyles();

  return (
  	<Router> 

    <div className={classes.root}>

    <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>

    	<Navbar />

    </Grid>

    </div>
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

        <Route exact path="/FAQ">
          <FAQ />
        </Route>

        <Route exact path="/VaccineAnectdotes">
          <PostDefault />
        </Route>

        <Route exact path="/CreatePost">
          <CreatePost />
        </Route>

         {/* If user try to access a invalid page,
                    redirect user to Homepage.
                */}
                
        <Redirect to="/"/>

    	</Switch>

      <Subscription />

    <Box mt={5}>
    	<Copyright />
    </Box>

    </Router> 
  );
}

export default App;