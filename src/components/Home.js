import Dropdown from './Dropdown.js'
import Grid from '@material-ui/core/Grid';
import Map from "./Map.js"; 
import ReactTooltip from "react-tooltip";
import Subscription from "./Subscription.js";
import Textfield from './Textfield.js';
import allStates from "./allstates.json";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function convertRegion(input, to) {
  var states = [
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['American Samoa', 'AS'],
      ['Arizona', 'AZ'],
      ['Arkansas', 'AR'],
      ['Armed Forces Americas', 'AA'],
      ['Armed Forces Europe', 'AE'],
      ['Armed Forces Pacific', 'AP'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['District Of Columbia', 'DC'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Guam', 'GU'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Marshall Islands', 'MH'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Northern Mariana Islands', 'NP'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Puerto Rico', 'PR'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['US Virgin Islands', 'VI'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
  ];

  // So happy that Canada and the US have distinct abbreviations
  var provinces = [
      ['Alberta', 'AB'],
      ['British Columbia', 'BC'],
      ['Manitoba', 'MB'],
      ['New Brunswick', 'NB'],
      ['Newfoundland', 'NF'],
      ['Northwest Territory', 'NT'],
      ['Nova Scotia', 'NS'],
      ['Nunavut', 'NU'],
      ['Ontario', 'ON'],
      ['Prince Edward Island', 'PE'],
      ['Quebec', 'QC'],
      ['Saskatchewan', 'SK'],
      ['Yukon', 'YT'],
  ];
  var regions = states.concat(provinces);
  var i;
  if (to === "to_agg") {
      for (i = 0; i < regions.length; i++) {
          if (regions[i][0] === input) {
              return (regions[i][1]);
          }
      }
  } else if (to === "to_name") {
      input = input.toUpperCase();
      for (i = 0; i < regions.length; i++) {
          if (regions[i][1] === input) {
              return (regions[i][0]);
          }
      }
  }
}
export default function Home() {

    const [dayPerVac,setDayPerVac] = useState(0);
    const [oneShotNum,setOneShotNum] = useState(0);
    const [twoShotNum,setTwoShotNum] =useState(0);
    const classes = useStyles();

    const [place, setPlace] = useState("");
    const [stateInfo, setStateInfo] = useState(""); 
    const [saveStateInfo,setOldStateInfo] = useState("");
    const handlePlaceChangeDropDown = (newplace) => {
      setPlace(newplace);
      for(var i =0; i<allStates.length;i++){
        if(allStates[i].id === newplace){
          setOldStateInfo(allStates[i].val);
          break;
        }
      }
      setDayPerVac(Math.floor((Math.random() * 10) + 1));
      setOneShotNum(Math.floor((Math.random() * 5000) + 5000));
      setTwoShotNum(Math.floor((Math.random() * 5000) + 1));
    }; 
    const handlePlaceChangeMaps = (newplace,newInfo) => {
      setPlace(newplace);
      setOldStateInfo(newInfo);
      setDayPerVac(Math.floor((Math.random() * 10) + 1));
      setOneShotNum(Math.floor((Math.random() * 5000) + 5000));
      setTwoShotNum(Math.floor((Math.random() * 5000) + 1));
    }
  return (
    <div className={classes.root} >
     <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>    
    <Grid item  xs = {12} md = {9}> 
    <Map setToolTipContent = {setStateInfo} onPlaceChange ={handlePlaceChangeMaps} />
    <ReactTooltip type = "light" multiline html border >{stateInfo}</ReactTooltip>
    </Grid>
     <Grid item xs = {12} md = {3} spacing = {3} > 
      <Dropdown place ={place} onPlaceChange = {handlePlaceChangeDropDown} />
      <Textfield place = {convertRegion(place,'to_name')} dayToHerdIm={saveStateInfo}  dayPerVac={dayPerVac} oneShotNum={oneShotNum} twoShotNum={twoShotNum}/>
    </Grid>
     <Subscription /> 
    </Grid>
    </div>
  );
}

