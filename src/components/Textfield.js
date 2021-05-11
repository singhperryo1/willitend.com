import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
    width: '100%',
    display: 'grid', 
    justifyContent: 'center', 
    alignItems: 'center',
  }
});
const map = {
  "AL":"Alabama",
  "AK":"Alaska",
  "AZ":"Arizona",
  "AR":"Arkansas",
  "CA":"California",
  "CO":"Colorado",
  "CT":"Connecticut",
  "DE":"Delaware",
  "DC":"District of Columbia",
  "FL":"Florida",
  "GA":"Georgia",
  "HI":"Hawaii",
  "ID":"Idaho",
  "IL":"Illinois",
  "IN":"Indiana",
  "IA":"Iowa",
  "KS":"Kansas",
  "KY":"Kentucky",
  "LA":"Louisiana",
  "ME":"Maine",
  "MD":"Maryland",
  "MA":"Massachusetts",
  "MI":"Michigan",
  "MN":"Minnesota",
  "MS":"Mississippi",
  "MO":"Missouri",
  "MT":"Montana",
  "NE":"Nebraska",
  "NV":"Nevada",
  "NH":"New Hampshire",
  "NJ":"New Jersey",
  "NM":"New Mexico",
  "NY":"New York",
  "NC":"North Carolina",
  "ND":"North Dakota",
  "OH":"Ohio",
  "OK":"Oklahoma",
  "OR":"Oregon",
  "PA":"Pennsylvania",
  "RI":"Rhode Island",
  "SC":"South Carolina",
  "SD":"South Dakota",
  "TN":"Tennessee",
  "TX":"Texas",
  "UT":"Utah",
  "VT":"Vermont",
  "VA":"Virginia",
  "WA":"Washington",
  "WV":"West Virginia",
  "WI":"Wisconsin",
  "WY":"Wyoming",
  "AS":"American Samoa",
  "FM":"Micronesia",
  "GU":"Guam",
  "MH":"Marshall Islands",
  "MP":"Northern Marianas",
  "PW":"Palau",
  "PR":"Puerto Rico",
  "VI":"U.S. Virgin Islands",
}


export default function Textfield (props) {
  const classes = useStyles();
  let state = props.place; 
  let stateInfo = props.stateInfo;
  let rows = [];

function createData(temp_state) {
  if(stateInfo.length===0 || temp_state===""){
    return [
      ["Days to Herd Immunity","N/A"],
      ["Citizens Currently Vaccinated (Partially)","N/A"],
      ["Citizens Currently Vaccinated (Fully)","N/A"],
      ["Vaccinations Per Day","N/A"]
    ];
  }
  else{
    for(let i = 0;i<stateInfo.length;i++){
      if(temp_state === stateInfo[i].name){
        return [
          ["Days to Herd Immunity",stateInfo[i].hdays],
          ["Citizens Currently Vaccinated (Partially)",stateInfo[i].firstShot],
          ["Citizens Currently Vaccinated (Fully)",stateInfo[i].secShot],
          ["Vaccinations Per Day",stateInfo[i].vacPerDay]
        ];
      }
    }
  }
}
  rows = createData(state);
  return (
    <div>
    <TableContainer component = {Paper}>
      <Table className={classes.table} aria-label="COVID-19 Vaccine Results Table">
        <TableHead>
        {state !== "" && 
          <h1>State of {map[state]} Vaccine Results </h1>
        }
        {state === "" &&
          <h1>Vaccine Results</h1>
        }
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[0]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}