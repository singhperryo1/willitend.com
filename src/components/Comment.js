import React from 'react';

class Comment extends React.Component {
  

  render() {
    return (
      <div className="col-md-5">
      <div className = "form-group">
        <textarea className="form-control" type="textarea" id="subject" placeholder="Comment" maxlength="200" cols="100" rows="5"></textarea>
      </div>

      <br />
      <button>
        Post
      </button>
      </div>
    );
  }
}

export default Comment;