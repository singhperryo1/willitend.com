import React from 'react';
import Button from '@material-ui/core/Button';
import Signupicon from '../Icon/signup.png';
const Signupbutton = ({ style }) =>
{
    return(
        <div>
            <Button variant="contained"  href="#contained-buttons" style={style}>
                <img src={Signupicon} width ={15} height={15}/>
                Sign Up
            </Button>
        </div>
    );
}
export default Signupbutton;