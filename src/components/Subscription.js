import allStates from "./allstates.json";
import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
    this.state = {email : '', place: 'CA'};

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
      email: event.target.value,
    })
  }
  handleForm (e) {
    e.preventDefault();
    console.log("This is the email: " + this.state.email + " and this is the state: " + this.state.place);
  }; 

  render() {
    const { classes } = this.props;

    return (
      <div>
      <h3>Be the first to receive the latest Herd Immunity updates</h3>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Email Required"
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
          label="State Required"
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
        <Button onClick = {this.handleForm} style={{height: '55px', marginTop : '16px'}} variant="contained" color="dark">
          Submit
        </Button>
      </form>
</div>
    );
  }
}

Subscription.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Subscription);