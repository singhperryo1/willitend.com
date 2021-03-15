import Input_Field from './Input_Field';
import Create_Account_Button from './Create_Account_Button'
import Navbar from './Navbar'
import Grid from '@material-ui/core/Grid';

function Create_Account() {

  return (
  	<div>
  	<Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>
  	<br />
    <br />
    <br />
    <br />
  	<Navbar />
  	</Grid>
  	<Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>
    <Input_Field/>
    </Grid>
    <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>
    <br />
    <br />
    <br />
    <br />
    <Create_Account_Button/>
    </Grid>
    </div>
  );
}

export default Create_Account;