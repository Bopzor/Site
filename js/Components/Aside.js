const { NavLink } = ReactRouterDOM;

function renderProjectLink(project) {
  const title = project.title.toLowerCase();
  return (
    <p
      key={project.id}
    >
      <NavLink to={{ pathname: `/${title}`}} className="link" activeClassName="selected">
        {project.title}
      </NavLink>
    </p>
  );
}

const Aside = (props) => {
  return (
    <div className="aside-flex-wrapper">
      <aside>
        <p>
          <NavLink exact to={{ pathname: `/`}} className="link" activeClassName="selected">
            All
          </NavLink>
        </p>
        {props.projects.map((project) => renderProjectLink(project))}
      </aside>
    </div>
)};
