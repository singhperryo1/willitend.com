import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormAlert from "./FormAlert.js";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [status, setStatusBase] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }; 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleForm =  (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("One or more field is empty"); 
    } else {
    console.log("This is username: " + username + " this is pass: " + password);

    setUsername(""); 
    setPassword(""); 

    setStatusBase({ msg: "You are logged in", key: Math.random() });
  }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
         {<PersonIcon fontSize="small" />}
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Username"
                name="username"
                value = {username}
                onChange = {handleUsernameChange}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value = {password}
            onChange = {handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleForm}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="./CreateAccount" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>

        {status ? <FormAlert key={status.key} message={status.msg} /> : null}

      </div>
    </Container>
  );
}