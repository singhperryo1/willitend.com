import './Map.css';
import React, { Component } from 'react';
import USAMap from "react-usa-map";
import TextField from './Textfield.js';
import Dropdown from './Dropdown';
import Grid from '@material-ui/core/Grid';

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedStateName : 'Unselected State',
    }
  }
  mapHandler = (event) => {
    this.setState({selectedStateName:event.target.dataset.name});
  };
  callback = (stateName) =>{
    this.setState({selectedStateName:stateName});
  }
  render() {
    return (
      <div className="Map">
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <Grid item >
            <USAMap  onClick={this.mapHandler.bind(this)} />
          </Grid>
          <Grid item >
            <Dropdown partentCallBack = {this.callback} stateName={this.state.selectedStateName}/>
            <TextField state={this.state} dayToHerd={'Unknown'} vacPerDay={'Unknown'} fulVacc = {'Unknown'} parVacc={'Unknown'}/ >
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Map;