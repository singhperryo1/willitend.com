import Container from '@material-ui/core/Container';
import Dropdown from './Dropdown.js'
import Grid from '@material-ui/core/Grid';
import Map from "./Map.js"; 
import Navbar from "./Navbar.js";
import Textfield from './Textfield.js';


function Home() {
  return (
  	<Container> 
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
    </Container>
  );
}

export default Home;
