import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MdEditor from '../mdeditor.js';

import { updateProject, postProject } from '../actionsToAPI.js';
import Admin from '../components/admin.js';

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.textareaRef = React.createRef()
    const { project } = props;

    if (project) {
      this.state = {
        titleValue: this.props.project.title,
        repoValue: this.props.project.repo,
        urlValue: this.props.project.url,
      }
    } else {
      this.state = {
        titleValue: '',
        repoValue: '',
        urlValue: '',
      }
    }
  }

  componentDidMount() {
    const md = new MdEditor('#mdeditor', {
      uploader: 'https://bopzor.me/api/routes/uploader.php',
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

  handleRepoChange(e) {
    this.setState({repoValue: e.target.value});
  }

  handleUrlChange(e) {
    this.setState({urlValue: e.target.value});
  }

  formValidator() {
    const result = {};
    if (!(this.state.titleValue !== undefined && this.state.titleValue !== '')) {
      result['titleState'] = 'error';
    } else {
      result['titleState'] = '';
    }
    if (!(this.textareaRef.current.value !== undefined && this.textareaRef.current.value !== '')) {
      result['contentState'] = 'error';
    } else {
      result['contentState'] = '';
    }

    return result;
  }

  handleSubmitProject(e) {
    e.preventDefault()

    try {
      const result = this.formValidator();

      if (result.titleState === 'error' || result.contentState === 'error') {
        throw result;
      }

      if (this.props.project) {
        const body = {
          id: this.props.project.id,
          title: this.state.titleValue,
          content: this.textareaRef.current.value,
          repoValue: this.state.repoValue,
          urlValue: this.state.urlValue,
        }

        updateProject(body, (result) => {
          try {
            if (result.message === 'error') {
              throw {titleState: result.message, contentState: result.message};
            }

            this.props.onSaveProject(result);
            this.setState({redirect: `/project/${result.id}`});

          } catch(e) {
            this.handleErrors(e);
          }
        });

      } else {

        const body = {
          title: this.state.titleValue,
          content: this.textareaRef.current.value,
          repoValue: this.state.repoValue,
          urlValue: this.state.urlValue,
        }

        postProject(body, (result) => {
          try {
            if (result.message === 'error') {
              throw {titleState: result.message, contentState: result.message};
            }

            this.props.onSaveProject(result);
            this.setState({redirect: `/project/${result.id}`});

          } catch(e) {
            this.handleErrors(e);
          }
        });
      }

    } catch(e) {
      this.handleErrors(e);
    }
  }

  handleErrors(e) {
    this.setState({
      titleState: e.titleState,
      contentState: e.contentState,
    });
  }

  handleRedirect() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
  }

  handleResetForm(e) {
    e.preventDefault();

    this.setState({
      titleValue: '',
      repoValue: '',
      urlValue: '',
    });

    this.textareaRef.current.value = '';
  }

  render() {
    const submitValue = this.props.project ? 'Update' : 'Post';
    const contentValue = this.props.project ? this.props.project.content : undefined;

    return (
      <div>

        <Admin>
          <div className="form-container">

            <form>

              <fieldset>

                <legend>New project</legend>

                <div className="f-input-wrapper">

                  <input
                    className={this.state.titleState}
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={e => this.handleTitleChange(e)}
                    value={this.state.titleValue}
                    required
                  />

                  <div className={this.state.contentState}>
                    <textarea
                      name="content"
                      id="mdeditor"
                      defaultValue={contentValue}
                      ref={this.textareaRef}
                      required
                    />
                  </div>

                  <div className="p-f-bottom-wrapper">
                    <input
                      type="url"
                      placeholder="git repository"
                      onChange={e => this.handleRepoChange(e)}
                      value={this.state.repoValue}
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
        </Admin>

        <Admin isAdmin={false}>
          <Redirect to='/' />
        </Admin>
      </div>
    )
  }
}

export default ProjectForm;
