import React, { useState, useEffect } from 'react';

function fetchData(label, content){
    return {label, content};
}

export default function PostDefault(props){
    const title = fetchData('Title', props.title)
    const author = fetchData('Author', props.author)
    const vaccineSite = fetchData('Vaccination Site', props.vaccineSite)
    const date = fetchData('Date', props.date)
    const postContent = fetchData('Their Story', props.postContent)

     return (
        <div>
            {title.label}: {title.content}
            <br />
            {author.label}: {author.content}
            <br />
            {vaccineSite.label}: {vaccineSite.content}
            <br />
            {date.label}: {date.content}
            <br />
            <br />
            <div>
                {postContent.label}: {postContent.content}
                <br/>
                <br/>
            </div>
            Comments
            <br/>
            <textarea className="form-control" type="textarea" id="subject" placeholder="Comment" maxlength="200" cols="100" rows="5"></textarea>
            <br/>
            <button onClick>
                Post
            </button>
        </div>
    );

}