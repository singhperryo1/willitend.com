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

const rows = [
  createData('Days to Herd Immunity', '---'),
  createData('Vaccinations Per Day', '---'),
  createData('Citizens Currently Vaccinated (Fully)', '---'),
  createData('Citizens Currently Vaccinated (Partially)', '---'),
];

export default function Textfield() {
  const classes = useStyles();
  return (
    <TableContainer component = {Paper}>
      <Table className={classes.table} aria-label="COVID-19 Vaccine Results Table">
        <TableHead>
          <h1>Vaccine Results</h1>
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