import Dropdown from './Dropdown.js'
import Grid from '@material-ui/core/Grid';
import Map from "./Map.js"; 
import Navbar from "./Navbar.js";
import Textfield from './Textfield.js';

import { makeStyles } from '@material-ui/core/styles';
	
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {

	const classes = useStyles();

  return (

  	<div className = {classes.root}>
    <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>
    <br />
    <br />
    <br />
    <br />
    <Navbar />
    <Map />
    <Dropdown />
    <Textfield />
    </Grid>
    </div>
  );
}

export default Home;
