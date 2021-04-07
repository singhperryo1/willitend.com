import Dropdown from './Dropdown.js'
import Grid from '@material-ui/core/Grid';
import Map from "./Map.js"; 
import ReactTooltip from "react-tooltip";
import Textfield from './Textfield.js';

import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {

    const classes = useStyles();

    const [place, setPlace] = useState("");
    const [stateInfo, setStateInfo] = useState(""); 

    function getDataFromBackend () {
    /*
    Make backend call to fetch the data for the state and then return the result using rowId
    */

    /* hard coded for now */ 
    var data = {
      herdImmunityDays : 12, 
      vaccPerDay: 144, 
      fullVac: 10, 
      partialVac: 23
    }

    return data; 
  }

  var data = getDataFromBackend();

    const handlePlaceChange = (place) => {
      setPlace(place);
    }; 

  return (
    <div className={classes.root} >
     <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>    
    <Grid item  xs = {12} md = {9}> 
    <Map setToolTipContent = {setStateInfo} statesData = {data} />
    <ReactTooltip type = "light" multiline html border >{stateInfo}</ReactTooltip>
    </Grid>
     <Grid item xs = {12} md = {3} spacing = {3} > 
      <Dropdown place ={place} onPlaceChange = {handlePlaceChange} />
      <Textfield place = {place} statesData= {data} />
    </Grid> 
    </Grid>

    </div>
  );
}