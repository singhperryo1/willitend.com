import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
  return (
    <Breadcrumbs separator = "  " aria-label="breadcrumb">
      <StyledBreadcrumb component="a"  label="Home" icon={<HomeIcon fontSize="small" />} />
      <StyledBreadcrumb component="a"  label="Stay Updated" icon={<NotificationsIcon fontSize="small" />} />
      <StyledBreadcrumb component="a"  label="Login" icon={<PersonIcon fontSize="small" />} />
      <StyledBreadcrumb component="a"  label="Create Account" icon={<AccountCircleIcon fontSize="small" />} />
      <StyledBreadcrumb component="a"  label="Vaccine Anectdotes" icon={<ChatBubbleIcon fontSize="small" />} />
      />
    </Breadcrumbs>
  );
}
