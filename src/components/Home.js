import Dropdown from './Dropdown.js'
import Grid from '@material-ui/core/Grid';
import Map from "./Map.js"; 
import ReactTooltip from "react-tooltip";
import Textfield from './Textfield.js';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState,useEffect} from 'react';
import WillitendService from '../services/Willitend.service.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {

    const classes = useStyles();
    const [place, setPlace] = useState("");
    const [stateToolTip, setStateToolTip] = useState(""); 
    const [stateInfo, setStatInfo] = useState([]);
  // Only get information from database at the first time.
  useEffect(() => {
    WillitendService.getAllStateInfo()
    .then(return_data =>{
    setStatInfo(return_data.data)
    })
    .catch(err=>{
      alert(err);
      console.log("Unable to Loaded");
      }
    );
    console.log("Homepage ==> load State Vacc data");
  }, []);

    const handlePlaceChange = (temp_place) => {
      setPlace(temp_place);
    }; 
    const handlePlaeSelectFromMap = (temp_place) =>{
      setPlace(temp_place);
    };
  return (
    <div className={classes.root} >
     <Grid container = {true} direction = "row" justify = "center" alignItems = "center" spacing = {3}>    
    <Grid item  xs = {12} md = {9}> 
    <Map setToolTipContent = {setStateToolTip} stateInfo={stateInfo} returnState ={handlePlaeSelectFromMap}/>
    <ReactTooltip type = "light" multiline html border >{stateToolTip}</ReactTooltip>
    </Grid>
     <Grid item xs = {12} md = {3} spacing = {3} > 
      <Dropdown place ={place} stateInfo = {stateInfo} onPlaceChange = {handlePlaceChange} />
      <Textfield place = {place} stateInfo = {stateInfo}/>
    </Grid> 
    </Grid>

    </div>
  );
}