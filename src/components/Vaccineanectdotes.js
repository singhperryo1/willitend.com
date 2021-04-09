import Grid from '@material-ui/core/Grid';
import PostDefault from "./PostDefault.js";

import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
}));

function VaccineAnectdotes () {

/* make backend call from db and get the data */
/* Hard coded for now */ 

        var info = {
        username : "jared", 
        state: "NY", 
        date : "02 - 05 - 2021", 
        title : "A gleam of light", 
        site : "Los Gatos Medical Office Center", 
        exp : "Done with my 2nd shot of vaccination today. Very smooth, no problems. Feels like someone lightly punched me in the arm but so far so good. I hope its this smooth for everyone.#CovidVaccine #Covishield #AstraZeneca"
        }


        var info1 = {
        username : "jakeFromStateFarm", 
        state: "CO", 
        date : "04 - 04 - 2021", 
        title : "Painful Experience", 
        site : "Colorado Health Center", 
        exp : "I felt dizzy and was almost asleep for two days in a row! #FauciOuchie"
        }



    	const classes = useStyles();

        const renderCards = () => {
            let cards = []; 

            for (let i = 0; i < 13; i++) {

                if (i % 2 === 0) {

                cards.push(<PostDefault data = {info1} />);

                } else {

                cards.push(<PostDefault data = {info} />);
            }

            }

            return cards;

        }

        return (
        	 <div className={classes.root}>
        	    <Grid container={true} direction = "row" justify = "center" alignItems = "center" >

                {renderCards()}

                </Grid>
        	 </div>
        );
};

export default VaccineAnectdotes;
