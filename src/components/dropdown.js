import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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

export default function Dropdown() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">State</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>AK</MenuItem>
          <MenuItem value={20}>AL</MenuItem>
          <MenuItem value={30}>AR</MenuItem>
          <MenuItem value={40}>AZ</MenuItem>
          <MenuItem value={50}>CA</MenuItem>
          <MenuItem value={60}>CO</MenuItem>
          <MenuItem value={70}>CT</MenuItem>
          <MenuItem value={80}>DE</MenuItem>
          <MenuItem value={90}>FL</MenuItem>
          <MenuItem value={100}>GA</MenuItem>
          <MenuItem value={110}>HI</MenuItem>
          <MenuItem value={120}>IA</MenuItem>
          <MenuItem value={130}>ID</MenuItem>
          <MenuItem value={140}>IL</MenuItem>
          <MenuItem value={150}>IN</MenuItem>
          <MenuItem value={160}>KS</MenuItem>
          <MenuItem value={170}>KY</MenuItem>
          <MenuItem value={180}>LA</MenuItem>
          <MenuItem value={190}>MA</MenuItem>
          <MenuItem value={200}>MD</MenuItem>
          <MenuItem value={210}>ME</MenuItem>
          <MenuItem value={220}>MI</MenuItem>
          <MenuItem value={230}>MN</MenuItem>
          <MenuItem value={240}>MO</MenuItem>
          <MenuItem value={250}>MS</MenuItem>
          <MenuItem value={260}>MT</MenuItem>
          <MenuItem value={270}>NC</MenuItem>
          <MenuItem value={280}>ND</MenuItem>
          <MenuItem value={290}>NE</MenuItem>
          <MenuItem value={300}>NH</MenuItem>
          <MenuItem value={310}>NJ</MenuItem>
          <MenuItem value={320}>NM</MenuItem>
          <MenuItem value={330}>NV</MenuItem>
          <MenuItem value={340}>NY</MenuItem>
          <MenuItem value={350}>OH</MenuItem>
          <MenuItem value={360}>OK</MenuItem>
          <MenuItem value={370}>OR</MenuItem>
          <MenuItem value={380}>PA</MenuItem>
          <MenuItem value={390}>RI</MenuItem>
          <MenuItem value={400}>SC</MenuItem>
          <MenuItem value={410}>SD</MenuItem>
          <MenuItem value={420}>TN</MenuItem>
          <MenuItem value={430}>TX</MenuItem>
          <MenuItem value={440}>UT</MenuItem>
          <MenuItem value={450}>VA</MenuItem>
          <MenuItem value={460}>VT</MenuItem>
          <MenuItem value={470}>WA</MenuItem>
          <MenuItem value={480}>WI</MenuItem>
          <MenuItem value={490}>WV</MenuItem>
          <MenuItem value={500}>WY</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
