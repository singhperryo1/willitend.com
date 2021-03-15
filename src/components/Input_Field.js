import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Input_Field() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </div>
      <div>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
      </div>
      <div>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <div>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
      </div>
    </form>
  );
}
