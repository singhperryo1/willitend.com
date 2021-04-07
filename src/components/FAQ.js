import Faq from "react-faq-component";
import { makeStyles } from '@material-ui/core/styles';

/* using hardcoded data for now, we will later get the data from db */
const data = {

    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Who are we?",
            content: <p>We are the current students,who major in Computer Science and Software Engineer,at San Jose State University.As you may known, the COVID-19 pandemic has result most of the university in 
                        the United States changed instruction from in-person mode to remote. We all have the same question as you have and the question is when it will end?</p>
        },
        {
            title: "Do we sell your data?",
            content: <p>The proposal of our website is to help people predicting approximate time when the herd immunity will reach. All your information we understanded will be used for privoiding better service to you.
            We will never sell your information to any thrid-party website.</p>
        },
        {
            title: "Why should I have an account?",
            content:
                <p>You are able to recive the email from us about the major update information about COVID-19 once you have a account.</p>
        },
        {
            title: "Is vaccination information relialbe?",
            content: `<p> we collect all the data regarding vaccination and COVID-19 from government website. Following are our sources:</p>
                      <a href="https://covid19.ca.gov/vaccines/#California-vaccines-dashboard">California State CDC</a> <br/>
                      <a href="https://www.doh.wa.gov/Emergencies/COVID19/DataDashboard">Washington State CDC</a>`
        },
    ],
};

const styles = {
    bgColor: "#FFFFFF",
    titleTextColor: "#505050",
    rowTitleColor: "#009688",
    arrowColor: "blue",
};

const config = {
     animate: true,
     tabFocus: true
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(25)

  },
}));

export default function FAQ (){

    const classes = useStyles();

    return(
        <div className={classes.root} >
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
