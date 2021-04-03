import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Anectdotes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input defaultValue="Share your vaccination experience" inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Your Name" inputProps={{ 'aria-label': 'description' }} />
      <Input defaultValue="Vaccination site" disabled inputProps={{ 'aria-label': 'description' }} />
      <Input defaultValue="Date of vaccination" error inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
}
