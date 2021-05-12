import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const moreThan150Props = {
    bgcolor: '#f44336',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.0rem', height: '1.0rem' },
  };
  
  const moreThan120Props = {
    bgcolor: '#fa5788',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.0rem', height: '1.0rem' },
  };
  
  const moreThan100Props = {
    bgcolor: '#ff8a50',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.0rem', height: '1.0rem' },
  };
  const moreThan80Props = {
    bgcolor: '#ffca28',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.0rem', height: '1.0rem' },
  };
  const moreThanAWeekProps = {
    bgcolor: '#81d4fa',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.0rem', height: '1.0rem' },
  };
  const herdImmunityProps = {
    bgcolor: '#e0e0e0',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '1.0rem', height: '1.0rem' },
  };

  export default function Navbar(){
    return(
      <Grid spacing ={5} container direction="row" justify="center" alignItems="center">
            
            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan150Props}>
              </Box>
              <p>150 +</p>
            </Grid>

            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan120Props}>
              </Box>
              <p>120 +</p>
            </Grid>

            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan100Props}>
              </Box>
              <p>100 +</p>
            </Grid>

            <Grid item>
              <Box borderRadius="borderRadius" {...moreThan80Props}>
              </Box>
              <p>80 +</p>
            </Grid>

            <Grid item>
              <Box borderRadius="borderRadius" {...moreThanAWeekProps}>
              </Box>
              <p>8 + </p>
            </Grid>

            <Grid item>
              <Box borderRadius="borderRadius" {...herdImmunityProps}>
              </Box>
              <p>0</p>
            </Grid>
        </Grid>
      );
  } 