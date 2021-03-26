import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import Loginbutton from './Loginbutton.js';
import Navbar from "./Navbar.js"
import Newsboard from "./Newsboard.js";
import {React, Component } from 'react';
import Signup from "./Signup.js";
import Vaccineanectdotes from "./Vaccineanectdotes.js";

class Path extends Component
{
    render()
    {
        return(
            <Router> 
                <Switch>
                {/*Home page*/}
                <Route exact path="/"> 
                    <Home/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
                </Route>
                <Route path="/Vaccineanectdotes">
                    <Navbar/>
                    <Vaccineanectdotes/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link> 
                </Route>
                <Route path="/Newsboard">
                    <Navbar/>
                    <Newsboard/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
                </Route>
                <Route path="/Login">
                    <Navbar/>
                    <Login/>
                </Route>
                <Route path ="/Signup">
                    <Navbar/>
                    <Signup/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
                </Route>
                {/* If user try to access a invalid page,
                    redirect user to Homepage.
                */}
                <Redirect to="/"/>
                </Switch>
            </Router>
        );
    }
};
export default Path;