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

  const state = props.place; 
  const statesData = props.statesData;

  const rows = [
  createData(state, '1', 'Days to Herd Immunity', '---'),
  createData(state, '2', 'Vaccinations Per Day', '---'),
  createData(state, '3', 'Citizens Currently Vaccinated (Fully)', '---'),
  createData(state, '4', 'Citizens Currently Vaccinated (Partially)', '---'),
];

function createData(state, rowId, measurement, result) {

  /* simple edge case for demo w/ hard coded */ 
  if (state === 'CA') {
    result = 84; 
    return {measurement, result};
  } else if (state === "") {

    result = "NaN"; 
    return {measurement, result};
  } else {
  /* iterate over the statesData and find the data for a particular state and populate using rowId */ 
  /* for now simply add the hardcoded data using id */ 
      if (rowId === '1') {
        result = statesData.herdImmunityDays; 
      } else if (rowId === '2') {
        result = statesData.vaccPerDay; 
      } else if (rowId === '3') {
        result = statesData.fullVac; 
      } else {
        result = statesData.partialVac; 
      }

  return {measurement, result}; 
  }
}

  return (
    <TableContainer component = {Paper}>
      <Table className={classes.table} aria-label="COVID-19 Vaccine Results Table">
        <TableHead>
        {state !== "" && 
          <p><h4>Vaccine Results for {state}</h4></p>
        }
        {state === "" &&
          <p><h3>Vaccine Results</h3></p>
        }
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.measurement}>
              <TableCell component="th" scope="row">
                {row.measurement}
              </TableCell>
              <TableCell align="right">{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}