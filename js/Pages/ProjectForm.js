const { Redirect } = ReactRouterDOM;

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.textareaRef = React.createRef()
    const { project } = props;

    if (project) {
      this.state = {
        titleValue: this.props.project.title,
        githubValue: this.props.project.github,
        urlValue: this.props.project.url,
      }
    } else {
      this.state = {
        titleValue: '',
        githubValue: '',
        urlValue: '',
      }
    }
  }

  componentDidMount() {
    const md = new MdEditor('#mdeditor', {
      uploader: 'undefined',
      preview: true,
      images: [],
    });
  }

  handleTitleChange(e) {
    this.setState({titleValue: e.target.value});
  }

  handleContentChange(e) {
    this.setState({contentValue: e.target.value});
  }

  handleGithubChange(e) {
    this.setState({githubValue: e.target.value});
  }

  handleUrlChange(e) {
    this.setState({urlValue: e.target.value});
  }

  handleSubmitProject(e) {
    e.preventDefault()

    if (this.props.project) {
      const body = {
        id: this.props.project.id,
        title: this.state.titleValue,
        content: this.textareaRef.current.value,
        githubValue: this.state.githubValue,
        urlValue: this.state.urlValue,
      }

      updateProject(body, (result) => {
        this.props.onSaveProject(result);
        this.setState({redirect: `/project/${result.id}`});
      });

    } else {
      if (this.state.titleValue !== undefined) {
        const body = {
          title: this.state.titleValue,
          content: this.textareaRef.current.value,
          githubValue: this.state.githubValue,
          urlValue: this.state.urlValue,
        }

        postProject(body, (result) => {
          this.props.onSaveProject(result);
          this.setState({redirect: `/project/${result.id}`});
        });
      }
    }

  }

  handleRedirect() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
  }

  render() {
    const submitValue = this.props.project ? 'Update' : 'Post';
    const contentValue = this.props.project ? this.props.project.content : undefined;

    return (
      <div className="form-container">
        
        <form>

          <fieldset>
              
            <legend>New project</legend>

            <div className="f-input-wrapper">

              <input
                type="text"
                placeholder="Title"
                onChange={e => this.handleTitleChange(e)}
                value={this.state.titleValue}
              />

              <textarea id="mdeditor" defaultValue={contentValue} ref={this.textareaRef} />

              <div className="p-f-bottom-wrapper">
                <input 
                  type="text"
                  placeholder="github repo"
                  onChange={e => this.handleGithubChange(e)}
                  value={this.state.githubValue}
                />
                <input 
                  type="text"
                  placeholder="url"
                  onChange={e => this.handleUrlChange(e)}
                  value={this.state.urlValue}
                />
                
                <div className="f-buttons">
                  <button className="button" onClick={(e) => this.handleSubmitProject(e)}>{submitValue}</button>
                  <button className="button" onClick={e => this.handleResetForm(e)}>Reset</button>
                </div>

              </div>
              
            </div>

              {this.handleRedirect()}

          </fieldset>

        </form>

      </div>
    )
  }
}
