const { Redirect } = ReactRouterDOM;

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

  handleSubmitArticle(e) {
    e.preventDefault()

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
      if (this.state.titleValue !== undefined && this.state.selectValues.length > 0) {
        const body = {
          title: this.state.titleValue,
          content: this.textareaRef.current.value,
          categoriesId: this.state.selectValues,
        }

        postArticle(body, (result) => {
          this.props.onSaveArticle(result);
          this.setState({redirect: `/blog/article/${result.id}`});
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
    const submitValue = this.props.article ? 'Update' : 'Post';
    const contentValue = this.props.article ? this.props.article.content : undefined;

    return (
      <div className="form-container">
        
        <form>

          <fieldset>
              
            <legend>New article</legend>

            <div className="f-input-wrapper">

              <input
                type="text"
                placeholder="Title"
                onChange={e => this.handleTitleChange(e)}
                value={this.state.titleValue}
              />

              <textarea id="mdeditor" defaultValue={contentValue} ref={this.textareaRef} />

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
