import Comment from './Comment';
import React from 'react';

class PostDefault extends React.Component {
	constructor(props){
		super(props);
		this.title = {data: "Sample Title"}
		this.author = {data: "Sample Author"}
		this.vaccine_site = {data: "Sample Vaccine-Site"}
		this.date = {data: "Sample Date"}
		this.post_content = {data: "Sample Post Content"}
		this.state = {comments: []}
	}

  render() {
    return (
    	<div>
        	<input type="text" value = {this.title.data} />
        	<input type="text" value = {this.author.data} />
        	<input type="text" value = {this.vaccine_site.data} />
        	<input type="text" value = {this.date.data} />
        	<br />
        	<br />
        	<div>
        		<textarea type="textarea" value={this.post_content.data} maxlength="1000" cols="100" rows="20"></textarea>
        	</div>
        	Comments
        	<Comment/>
        </div>
    );
  }
}

export default PostDefault;