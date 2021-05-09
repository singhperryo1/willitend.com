import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormAlert from "./FormAlert.js";
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

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

export default function CreatePost () {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [site, setSite] = useState(""); 
  const [exp, setExp] = useState("");
  const [status, setStatusBase] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }; 

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const handleExpChange = (event) => {
    setExp(event.target.value);
  }

  const handleForm =  (e) => {
    e.preventDefault();

     /*
    Make a get call to db, and save post, with date, username
    make the votes as zero
    */

    if (!title || !site || !exp) {
      alert("One or more field is empty"); 
    } else {

    console.log("This is site: " + site + " , title: " + title + " ,and exp: " + exp);
    console.log("This is ist: " + status);

    setTitle(""); 
    setSite(""); 
    setExp("");
    setStatusBase({msg: "Thank you for sharing your experience!", key : Math.random()}); 
    }
  }

  const logOut = (e) => {
    console.log("We will clear the cookies here to log out");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <p>You are logged in as </p>
      <h3>Singh from California</h3>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {logOut}
          >
            Log Out
            </Button>

        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                placeholder = "A gleam of light"
                value = {title}
                onChange = {handleTitleChange}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="site"
            label="Vaccination Site"
            id="site"
            placeholder = "Los Gatos Medical Office Center"
            value = {site}
            onChange = {handleSiteChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="exp"
            label = "Vaccination Experience"
            id="exp"
            multiline
            rows={10}
            placeholder = "Done with my 2nd shot of vaccination today. Very smooth, no problems. Feels like someone lightly punched me in the arm but so far so good. I hope its this smooth for everyone.#CovidVaccine #Covishield #AstraZeneca"
            value = {exp}
            onChange = {handleExpChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleForm}
          >
            Submit
          </Button>
        </form>

        <br/>
        <br/>
        <br/>
        <br/>

      </div>

      {status ? <FormAlert key={status.key} message={status.msg} /> : null}

    </Container>
  );
}
