import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import RoomIcon from '@material-ui/icons/Room';
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

const Dropdown = ( {partentCallBack , stateName} ) => {
  
  const classes = useStyles();
  const [state, setState] = React.useState(stateName);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setState(event.target.value);
    partentCallBack(event.target.value);
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
        <InputLabel id="demo-controlled-open-select-label">
          <RoomIcon fontSize="Big" />State
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={stateName}
          onChange={handleChange}
        >
          <MenuItem value='Unselected State'>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'AK'}>AK</MenuItem>
          <MenuItem value={'AL'}>AL</MenuItem>
          <MenuItem value={'AR'}>AR</MenuItem>
          <MenuItem value={'AZ'}>AZ</MenuItem>
          <MenuItem value={'CA'}>CA</MenuItem>
          <MenuItem value={'CO'}>CO</MenuItem>
          <MenuItem value={'CT'}>CT</MenuItem>
          <MenuItem value={'DE'}>DE</MenuItem>
          <MenuItem value={'FL'}>FL</MenuItem>
          <MenuItem value={'GA'}>GA</MenuItem>
          <MenuItem value={'HI'}>HI</MenuItem>
          <MenuItem value={'IA'}>IA</MenuItem>
          <MenuItem value={'ID'}>ID</MenuItem>
          <MenuItem value={'IL'}>IL</MenuItem>
          <MenuItem value={'IN'}>IN</MenuItem>
          <MenuItem value={'KS'}>KS</MenuItem>
          <MenuItem value={'KY'}>KY</MenuItem>
          <MenuItem value={'LA'}>LA</MenuItem>
          <MenuItem value={'MA'}>MA</MenuItem>
          <MenuItem value={'MD'}>MD</MenuItem>
          <MenuItem value={'ME'}>ME</MenuItem>
          <MenuItem value={'MI'}>MI</MenuItem>
          <MenuItem value={'MN'}>MN</MenuItem>
          <MenuItem value={'MO'}>MO</MenuItem>
          <MenuItem value={'MS'}>MS</MenuItem>
          <MenuItem value={'MT'}>MT</MenuItem>
          <MenuItem value={'NC'}>NC</MenuItem>
          <MenuItem value={'ND'}>ND</MenuItem>
          <MenuItem value={'NE'}>NE</MenuItem>
          <MenuItem value={'NH'}>NH</MenuItem>
          <MenuItem value={'NJ'}>NJ</MenuItem>
          <MenuItem value={'NM'}>NM</MenuItem>
          <MenuItem value={'NV'}>NV</MenuItem>
          <MenuItem value={'NY'}>NY</MenuItem>
          <MenuItem value={'OH'}>OH</MenuItem>
          <MenuItem value={'OK'}>OK</MenuItem>
          <MenuItem value={'OR'}>OR</MenuItem>
          <MenuItem value={'PA'}>PA</MenuItem>
          <MenuItem value={'RI'}>RI</MenuItem>
          <MenuItem value={'SC'}>SC</MenuItem>
          <MenuItem value={'SD'}>SD</MenuItem>
          <MenuItem value={'TN'}>TN</MenuItem>
          <MenuItem value={'TX'}>TX</MenuItem>
          <MenuItem value={'UT'}>UT</MenuItem>
          <MenuItem value={'VA'}>VA</MenuItem>
          <MenuItem value={'VT'}>VT</MenuItem>
          <MenuItem value={'WA'}>WA</MenuItem>
          <MenuItem value={'WI'}>WI</MenuItem>
          <MenuItem value={'WV'}>WV</MenuItem>
          <MenuItem value={'WY'}>WY</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Dropdown;