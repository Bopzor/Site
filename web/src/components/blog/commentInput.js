import React, { Component } from 'react';

import { postComment } from '../../blogActionsToAPI.js';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudoValue: '',
      messageValue: '',
      articleId: this.props.articleId
    }
  }

  handlePseudoChange(e) {
    this.setState({pseudoValue: e.target.value});
  }

  handleMessageChange(e) {
    this.setState({messageValue: e.target.value});
  }

  handleResetForm(e) {
    e.preventDefault();

    this.setState({
      pseudoValue: '',
      messageValue: '',
    })
  }

  handleSubmitComment(e) {
    e.preventDefault();

    if (this.state.pseudoValue !== undefined && this.state.messageValue !== undefined) {
      const body = {
        nick: this.state.pseudoValue,
        content: this.state.messageValue,
        articleId: this.state.articleId
      }

      postComment(body, (result) => this.props.callback(result));
    }

    this.handleResetForm(e);
  }

  render() {

    return (
      <div className="comment-wrapper">
        
        <form>

          <fieldset className="comment-flex-wrapper">
              
              <legend>New comment</legend>

              <input
                type="text"
                name="title"
                placeholder="Nick"
                onChange={e => this.handlePseudoChange(e)}
                value={this.state.pseudoValue}
              />
              <br/>
              <textarea
                value={this.state.messageValue}
                onChange={e => this.handleMessageChange(e)}
                rows="10"
                cols="50"
                placeholder="Your comment"
              />
              <br/>
              <button className="button" onClick={(e) => this.handleSubmitComment(e)}>Post</button>

          </fieldset>

        </form>

      </div>
    );
  }
}

export default CommentInput;
