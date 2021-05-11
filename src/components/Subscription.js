import allStates from "./allstates.json";
import Button from '@material-ui/core/Button';
import FormAlert from "./FormAlert.js";
import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import WillitendService from "../services/Willitend.service.js";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
});

class Subscription extends React.Component {

  constructor (props) {
    super (props);
    this.state = {email : '', place: 'CA', status : '', key: ''};

    this.handleForm = this.handleForm.bind(this); 
    this.handlePlaceChange = this.handlePlaceChange.bind(this); 
    this.handleEmailChange = this.handleEmailChange.bind(this);  
  }

  handlePlaceChange = place => event => {
    this.setState({
      place: event.target.value,
    });
  };

  handleEmailChange = email => event => {
    this.setState({
      email: event.target.value
    })
  }
  
  handleForm (e) {
    e.preventDefault();

    if (!this.state.email || !this.state.place) {

      alert("One or more field is empty");
    } else {

      var newsletter = {
        email : this.state.email, 
        state : this.state.place
      }; 
  
      WillitendService.createNewsletter(newsletter)
        .catch(e => {
          console.log(e);
        });

    //console.log("This is the email: " + this.state.email + " and this is the state: " + this.state.place);

    this.setState({
      email: '', place: 'CA', status: "We've got your info, thanks!", key: Math.random()
    })

  }

  }; 

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Grid container = "true" direction = "row" justify = "center" alignItems = "center">
      <h3>Be the first to receive the latest Herd Immunity updates</h3>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder = "Enter email address"
          className={classes.textField}
          type = "text"
          margin="normal"
          variant="outlined"
          onChange = {this.handleEmailChange('email')}
          value = {this.state.email}
        />

        <TextField
          id="outlined-select-currency"
          select
          label="State*"
          className={classes.textField}
          value={this.state.place}
          onChange={this.handlePlaceChange('place')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select your state"
          margin="normal"
          variant="outlined"
        >
          {allStates.map(option => (
            <MenuItem key={option.val} value={option.id}>
              {option.id}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <Button onClick = {this.handleForm} style={{height: '55px', marginTop : '16px'}} variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </Grid>

      {this.state.status ? <FormAlert key = {this.state.key} message = {this.state.status} /> : null}

</div>
    );
  }
}

Subscription.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Subscription);