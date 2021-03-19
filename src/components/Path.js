import { BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";
import {React, Component } from 'react';
import Home from "./Home.js";
import Vaccineanectdotes from "./Vaccineanectdotes.js";
import Navbar from "./Navbar.js"
import Newsboard from "./Newsboard.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Signupbutton from './Signupbutton.js';
import Loginbutton from './Loginbutton.js';
class Path extends Component
{
    render()
    {
        return(
            <Router> 
                <Switch>
                {/*Home page*/}
                <Route exact path="/"> 
                    <Navbar/>
                    <Home/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
                    <Link to="/Signup">
                        <Signupbutton style={{position :'absolute', top:10, right:120, backgroundColor: "#21b6ae"}}/>
                    </Link>
                </Route>
                <Route path="/Vaccineanectdotes">
                    <Navbar/>
                    <Vaccineanectdotes/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
                    <Link to="/Signup">
                        <Signupbutton style={{position :'absolute', top:10, right:120, backgroundColor: "#21b6ae"}}/>
                    </Link>
                </Route>
                <Route path="/Newsboard">
                    <Navbar/>
                    <Newsboard/>
                    <Link to="/Login">
                        <Loginbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
                    <Link to="/Signup">
                        <Signupbutton style={{position :'absolute', top:10, right:120, backgroundColor: "#21b6ae"}}/>
                    </Link>
                </Route>
                <Route path="/Login">
                    <Navbar/>
                    <Login/>
                    <Link to="/Signup">
                        <Signupbutton style={{position :'absolute', top:10, right:10 , backgroundColor: "#21b6ae"}}/>
                    </Link>
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