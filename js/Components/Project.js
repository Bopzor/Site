const { Link } = ReactRouterDOM;

const createMarkeup = (content) => {
  const html_content = markdown.toHTML(content, 'Maruku')
  
  return {__html: html_content};
}

const Project = (props) => {
  let contentClassName = 'a-content';

  if (!props.showAll) {
    contentClassName += ' a-content-overflow';
  } 

  return (
    <article className="article">

      <header className="a-header">

        <Link
          to={{ pathname: `/project/${props.project.id}` }}
          className="link a-title"
        >
          <h2>{props.project.title}</h2>
        </Link>

      </header>

      <div className="a-details-wrapper">      

        <div className={contentClassName} dangerouslySetInnerHTML={createMarkeup(props.project.content)} />

      </div>

    </article>
  );
}