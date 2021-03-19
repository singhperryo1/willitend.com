import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '../Icon/homgpageicon.png';
import React from 'react';
import {Link } from "react-router-dom";
import { emphasize, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function Navbar() {
  return (
    <div>
    <Grid container spacing = {2} direction="row" justify="center" alignItems="center">
      <Grid item >
        <img src ={HomeIcon} width = {60} height ={60}/>
      </Grid>
      <Grid item >
        <Breadcrumbs separator = "->" aria-label="breadcrumb">
          <Link to="/">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Home"
            >
            </StyledBreadcrumb>
          </Link>
          <Link to="/Vaccineanectdotes">
            <StyledBreadcrumb component="a" href="#" label="Vaccine Anectdotes" />
          </Link>
          <Link to="/Newsboard">
            <StyledBreadcrumb component="a" href="#" label="Alerts:Stay Updated" />
          </Link>
        </Breadcrumbs>
      </Grid>
    </Grid>
    </div>
  );
}