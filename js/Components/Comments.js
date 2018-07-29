class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      articleId: this.props.articleId
    }
  }
  
  componentDidMount() {
    getComments(this.state.articleId, (result) => {
      this.setState({comments: result});
    });
  }

  onCreateComment(comment) {
    let comments = this.state.comments.slice();

    comments.push(comment);

    this.setState({comments});
  }

  renderComment(comment) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let publishedAt = new Date(comment.publishedAt);

    publishedAt = publishedAt.toLocaleString("en-US", options);

    return (
      <div className="comment-message-wrapper" key={comment.id}>
        <p className="c-m-nick-date">
          By 
            <span className="c-m-nick"> {comment.nick} </span> 
          on 
            <span className="c-m-publishedAt"> {publishedAt}.</span>
        </p>
        <p className="c-m-content">{comment.content}</p>
      </div>
    );
  }

  render() {
    if (this.state.comments.length > 0) {
      return (
        <div className="comments">
          <CommentInput articleId={this.props.articleId} callback={(comment => this.onCreateComment(comment))} />
          {this.state.comments.map((comment) => this.renderComment(comment))}
        </div>
      );
    } else {
      return <CommentInput articleId={this.props.articleId} callback={(comment => this.onCreateComment(comment))} />
    }

  }
}