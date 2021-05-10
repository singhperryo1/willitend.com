import Grid from '@material-ui/core/Grid';
import PostDefault from "./PostDefault.js";
import { makeStyles } from '@material-ui/core/styles';
import WillitendService from "../services/Willitend.service.js";
import React, { useState ,useEffect} from 'react';

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
}));




const VaccineAnectdotes = () => {

/* make backend call from db and get the data */
/* Hard coded for now */ 
    const [allExp, setAllExp] = useState([]);

    useEffect(() => {
        getAllExp();
    }, []);

    const getAllExp = () => {
        WillitendService.getAllExp()
        .then(response => {
            setAllExp(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

        /* hard coded example
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
        */

        
        const classes = useStyles();
        // number of experiences is initialized to 0
        let numExperiences = 0
        console.log("Experiences:" + allExp)
        // if number of experiences is not 0 check the allExp instance
        if (Object.values(allExp).length !== 0){
            // reassign number of experiences
            numExperiences = Object.values(Object.values(allExp)[2]).length
        }
        console.log("number of experiences: " + numExperiences)

        const renderCards = () => {
            let cards = []; 

            // iterates through all experiences and adds them to cards
            for (let i = 0; i < numExperiences; i++) {

                var info = {
                    username : Object.values(Object.values(allExp)[2][i])[2], 
                    state: Object.values(Object.values(allExp)[2][i])[6], 
                    date : Object.values(Object.values(allExp)[2][i])[1], 
                    title : Object.values(Object.values(allExp)[2][i])[4], 
                    site : Object.values(Object.values(allExp)[2][i])[3], 
                    exp : Object.values(Object.values(allExp)[2][i])[5]
                }

                cards.push(<PostDefault data = {info} />);

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