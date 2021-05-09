import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState ,useEffect} from 'react';
import Select from '@material-ui/core/Select';
import WillitendService from '../services/Willitend.service.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

var is_load_failed = false;
var is_load = false;
export default function Dropdown (props) {
  const classes = useStyles();
  var state = props.place;
  const [open, setOpen] = React.useState(false);
  const [stateInfo, setStatInfo] = useState([]);
  useEffect(() => {
    WillitendService.getAllStateInfo()
    .then(return_data =>{
    setStatInfo(return_data.data)
    })
    .catch(err=>{
      alert(err);
      is_load_failed = true;
      console.log("Unable to Loaded");
      }
    );
    console.log("Map ==> state info has been loaded");
    is_load = true;
  }, []);
  const handleChange = (event) => {
    props.onPlaceChange(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">State</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={state}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {stateInfo && stateInfo.map(element => (
            <MenuItem key={element.name} value={element.name}>
              {element.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}