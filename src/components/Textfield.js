import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
    width: '100%',
    display: 'grid', 
    justifyContent: 'center', 
    alignItems: 'center',
  }
});

export default function Textfield (props) {
  const classes = useStyles();
  let state = props.place; 
  let stateInfo = props.stateInfo;
  let rows = [];

  function createData(temp_state) {
  if(stateInfo.length === 0 || temp_state === ""){
    return [
      ["Days to Herd Immunity","N/A"],
      ["Citizens Currently Vaccinated (Partially)","N/A"],
      ["Citizens Currently Vaccinated (Fully)","N/A"],
      ["Vaccinations Per Day","N/A"]
    ];
  } else {
    for(let i = 0; i < stateInfo.length; i++) {
      if(state === stateInfo[i].name){
        return [
          ["Days to Herd Immunity: " + stateInfo[i].hdays],
          ["Citizens Currently Vaccinated (Partially): " + stateInfo[i].firstShot],
          ["Citizens Currently Vaccinated (Fully): " +stateInfo[i].secShot],
          ["Vaccinations Per Day: " + stateInfo[i].vacPerDay]
        ];
      }
    }
  }
}

 rows = createData(state);

  return (
    <TableContainer component = {Paper}>
      <Table className={classes.table} aria-label="COVID-19 Vaccine Results Table">
        <TableHead>
        {state !== "" && 
          <h4>Vaccine Results for {state}</h4>
        }
        {state === "" &&
          <h3>Vaccine Results</h3>
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
  );
}