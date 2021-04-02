import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Who are we?",
            content: <h1>We are the current students,who major in Computer Science and Software Engineer,at San Jose State University.As you may known, the COVID-19 pandemic has result most of the university in 
                        the United States changed instruction from in-person mode to remote. We all have the same question as you have and the question is when it will end?</h1>
        },
        {
            title: "Do we sell your data?",
            content: <h1>The proposal of our website is to help people predicting approximate time when the herd immunity will reach. All your information we understanded will be used for privoiding better service to you.
            We will never sell your information to any thrid-party website.</h1>
        },
        {
            title: "Why should I have an account?",
            content:
                <h1>You are able to recive the email from us about the major update information about COVID-19 once you have a account.</h1>
        },
        {
            title: "Is vaccination information relialbe?",
            content: `<h1> we collect all the data regarding vaccination and COVID-19 from government website. Following are our sources:</h1>
                      <a href="https://covid19.ca.gov/vaccines/#California-vaccines-dashboard">California State CDC</a> <br/>
                      <a href="https://www.doh.wa.gov/Emergencies/COVID19/DataDashboard">Washington State CDC</a>`
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "#009688",
    rowContentColor: 'black',
    arrowColor: "red",
};

const config = {
     animate: true,
     //arrowIcon: "V",
     tabFocus: true
};

export default function FAQ (){
    return(
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}