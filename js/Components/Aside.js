const { NavLink } = ReactRouterDOM;

function renderProjectLink(project) {
  return (
    <p
      key={project.id}
    >
      <NavLink to={{ pathname: `/${project.url}`}} className="link" activeClassName="selected">
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

        {props.projects.map((p) => renderProjectLink(p))}

        <Admin>
            <Link
              className="link"
              to={{ pathname: `/add`}}
            >
              <i className="fas fa-plus fa-5x" />
            </Link>
        </Admin>
      
      </aside>
    </div>
)};
