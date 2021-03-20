import Dropdown from './Dropdown.js'
import Grid from '@material-ui/core/Grid';
import Map from "./Map.js"; 
import Navbar from "./Navbar.js";
import Subscription from "./Subscription.js";
import Textfield from './Textfield.js';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Home() {

    const classes = useStyles();

  return (
    <div className={classes.root} >
     <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>
        <Navbar />    
    <Grid item  xs = {12} md = {9}> 
    <Map />
    </Grid>
     <Grid item xs = {12} md = {3} spacing = {3} > 
      <Dropdown />
      <Textfield />
    </Grid>
     <Subscription /> 
    </Grid>
    </div>
  );
}

export default Home;
