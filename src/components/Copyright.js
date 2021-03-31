import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'willitend.com © '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}

export default Copyright;