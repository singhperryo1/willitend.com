import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
    '&:hover':{
      cursor: "pointer", 
      transform: "scale(1.1)"
    }
  },
  avatar: {
    backgroundColor: "blue",
  },
}));

export default function PostDefault (props) {
  const classes = useStyles();

  var x = props.data; 

  return (
    <Card className={classes.root}>
      <CardHeader
       avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {x.state}
          </Avatar>
        }
        title= {props.data.username}
        subheader= {x.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <h4>{x.site}</h4>
        </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
        {x.title}
        </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
        {x.exp}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
