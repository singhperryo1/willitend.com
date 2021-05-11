import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PersonIcon from '@material-ui/icons/Person';
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

export default function Navbar() {

  return (
    <Breadcrumbs separator = "  " aria-label="breadcrumb">
    
    <Link to = "/" className = "link">
      <StyledBreadcrumb label="Home" icon={<HomeIcon fontSize="small" />} />
    </Link>
    
    <Link to = "/Login" className = "link">
      <StyledBreadcrumb label="Login" icon={<PersonIcon fontSize="small" />} />
    </Link>

    <Link to = "/Createaccount" className = "link">
      <StyledBreadcrumb label="Create Account" icon={<AccountCircleIcon fontSize="small" />} />
    </Link> 

    <Link to = "/VaccineAnectdotes" className = "link"> 
      <StyledBreadcrumb label="Vaccine Anecdotes" icon={<ChatBubbleIcon fontSize="small" />} />
    </Link> 

    <Link to = "/FAQ" className = "link">
      <StyledBreadcrumb label="FAQ" icon={<LiveHelpIcon fontSize="small" />} />
    </Link>


    </Breadcrumbs>
  );
}
