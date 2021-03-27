import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import allStates from "./allstates.json";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  menu: {
    width: 200,
  },
}));

export default function CreateAccount() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); 
  const [place, setPlace] = useState("");
  const [password, setPassword] = useState("");   

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }; 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }; 

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleForm =  (e) => {
    e.preventDefault();
    console.log("This is username: " + username + " and this is email: " + email + " and this is state: " + place + " and this is pass: " + password);
  }


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
         {<AccountCircleIcon fontSize="small" />} 
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username Required"
                name="username"
                value = {username}
                onChange = {handleUsernameChange}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Required"
                name="email"
                value = {email}
                onChange = {handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
            fullWidth
          id="outlined-select-currency"
          select
          label="State Required"
          value={place}
          onChange={handlePlaceChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {allStates.map(option => (
            <MenuItem key={option.val} value={option.id}>
              {option.id}
            </MenuItem>
          ))}
          </TextField>
        </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password Required"
                type="password"
                id="password"
                value = {password}
                onChange = {handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleForm}
          >
            Create Account 
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="./Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}