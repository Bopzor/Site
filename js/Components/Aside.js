const { NavLink } = ReactRouterDOM;

function renderCategoryLink(category) {
  return (
    <p
      key={category.id}
    >
      <NavLink to={{ pathname: `/articles/${category.id}`}} className="link" activeClassName="selected">
        {category.name}
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
        {props.categories.map((category) => renderCategoryLink(category))}

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
