import Dropdown from './Dropdown.js';
import Map from "./Map.js"; 
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
    <br />
    <br />
    <br />
    <br />
      <Map />
    </div>
  );
}
export default Home;