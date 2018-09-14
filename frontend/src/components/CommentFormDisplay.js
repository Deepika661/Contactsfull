import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { addComment, updateComment } from '../actions/comment';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class CommentFormDisplay extends Component {
    static propTypes = {
        post: PropTypes.object,
        addComment: PropTypes.func,
        comment: PropTypes.object,
        updateComment: PropTypes.func,
        FormatFinish: PropTypes.func
    };

  state = {
    author: this.props.comment ? 
    this.props.comment.author : '',
    body: this.props.comment ? 
    this.props.comment.body : ''
  };

  handleAfterChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submitHandle = event => {
    event.preventDefault();

    const {comment,FormatFinish,post,updateComment,addComment} = this.props;

    if (comment) {
      const updatedAllComment = {

          ...comment,
          timestamp: Date.now(),
          author: this.state.author,
          body: this.state.body
        };
      updateComment(updatedAllComment);
      FormatFinish();
    } else {

      const addsComment = {

          id: v4(),
          parentId: post.id,
          timestamp: Date.now(),
          author: this.state.author,
          body: this.state.body
      };

      addComment(addsComment);
    }

    this.setState({ author: '', body: '' });

  };

  render() {
    const { comment, FormatFinish } = this.props;

    return (
      <div
        style={{paddingLeft:20}}>
        
        <form
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
            onSubmit={event => this.submitHandle(event)}
            autoComplete="off"
        >
          <TextField required id="body" label="Comment" fullWidthmultilinerows="4"
            value={this.state.body} onChange={this.handleAfterChange('body')}
            style={{maxWidth: 450}}
          />
          <TextField required id="author" label="author" fullWidth
            value={this.state.author} onChange={this.handleAfterChange('author')}
            style={{
              maxWidth: 450,
              paddingTop: 15,
              paddingBottom: 25
            }}
          />

          <Button
            raised
            color="contrast"
              style={{
                maxWidth: 400,
                marginBottom: 20
              }}
            type="submit"
          >
            Save
          </Button>
          {comment && (
            <Button
              style={{
                maxWidth: 400,
                marginBottom: 20
              }}
              onClick={FormatFinish}
            >
              Cancel
            </Button>
          )}
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment, updateComment })(CommentFormDisplay);
