import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';

import { emphasize, withStyles } from '@material-ui/core/styles';


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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Navbar() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb component="a" href="#" label="Vaccine Anectdotes" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Alerts:Stay Updated" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Login" onClick={handleClick} />
      <StyledBreadcrumb
        label="Create Account"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        //onDelete={handleClick}
      />
    </Breadcrumbs>
  );
}