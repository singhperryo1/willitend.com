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

function createData(measurement, result) {
  return {measurement, result};
}

export default function Textfield (props) {
  const classes = useStyles();

  const state = props.place; 

  const rows = [
    createData('Days to Herd Immunity',props.dayToHerdIm),
    createData('Vaccinations Per Day',props.dayPerVac),
    createData('Citizens Currently Vaccinated (Fully)',props.oneShotNum),
    createData('Citizens Currently Vaccinated (Partially)',props.twoShotNum),
];

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
