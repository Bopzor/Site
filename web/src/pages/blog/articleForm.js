import React from 'react';
import { Redirect } from 'react-router';
import MdEditor from '../../mdeditor.js';

import { postArticle, updateArticle } from '../../blogActionsToAPI.js';

function renderCategoriesOptions(category) {
  return (
    <option key={category.id} value={category.id}>{category.name}</option>
  );
}

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.textareaRef = React.createRef()
    const { article } = props;

    if (article) {
      this.state = {
        titleValue: this.props.article.title,
        selectValues: this.props.article.category_id.split(','),
      }
    } else {
      this.state = {
        titleValue: '',
        selectValues: [],
      }
    }
  }

  componentDidMount() {
    const md = new MdEditor('#mdeditor', {
      uploader: 'http://localhost/api/routes/uploader.php',
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

  handleSelectChange(e) {
    const values = this.state.selectValues.slice();
    const idx = values.indexOf(e.target.value); 

    if (idx !== - 1) {
      values.splice(idx, 1);
    } else {
      values.push(e.target.value);
    }
    
    this.setState({selectValues: values});

  }

  handleResetForm(e) {
    e.preventDefault();

    this.setState({
      titleValue: '',
      selectValues: [],
      redirect: null,
    })
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

  handleSubmitArticle(e) {
    e.preventDefault()

    try {
      const result = this.formValidator();

      if (result.titleState === 'error' || result.contentState === 'error') {
        throw result;
      }

      if (this.props.article) {
        const body = {
          id: this.props.article.id,
          title: this.state.titleValue,
          content: this.textareaRef.current.value,
          categoriesId: this.state.selectValues,
        }

        updateArticle(body, (result) => {
          this.props.onSaveArticle(result);
          this.setState({redirect: `/blog/article/${result.id}`});
        });

      } else {
        const body = {
          title: this.state.titleValue,
          content: this.textareaRef.current.value,
          categoriesId: this.state.selectValues,
        }

        postArticle(body, (result) => {
          try {
            if (result.message === 'error') {
              throw {titleState: result.message, contentState: result.message};
            }
            
            this.props.onSaveArticle(result);
            this.setState({redirect: `/blog/article/${result.id}`});
            
          } catch(e) {
            this.handleErrors(e);
          }
        });
      }
      
    } catch (e) {
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

  render() {
    const submitValue = this.props.article ? 'Update' : 'Post';
    const contentValue = this.props.article ? this.props.article.content : undefined;

    return (
      <div className="form-container">
        
        <form>

          <fieldset>
              
            <legend>New article</legend>

            <div className="f-input-wrapper">

              <input
                className={this.state.titleState}
                type="text"
                placeholder="Title"
                onChange={e => this.handleTitleChange(e)}
                value={this.state.titleValue}
              />

              <div className={this.state.contentState}>
                <textarea
                  id="mdeditor"
                  defaultValue={contentValue}
                  ref={this.textareaRef}
                />
              </div>

              <label>Categories: </label>

              <div className="f-bottom-wrapper">

                <select multiple={true} value={this.state.selectValues} onChange={e => this.handleSelectChange(e)}>
                  {this.props.categories.map(category => renderCategoriesOptions(category))};
                </select>

                <div className="f-buttons">
                  <button className="button" onClick={(e) => this.handleSubmitArticle(e)}>{submitValue}</button>
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

export default ArticleForm;
