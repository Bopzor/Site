const { NavLink } = ReactRouterDOM;

function renderCategoryLink(category) {
  return (
    <p
      key={category.id}
    >
      <NavLink to={{ pathname: `/blog/articles/${category.id}`}} className="link" activeClassName="selected">
        {category.name}
      </NavLink>
    </p>
  );
}

const BlogAside = (props) => {
  return (
    <div className="aside-flex-wrapper">
      <aside>
        <p>
          <NavLink exact to={{ pathname: `/blog`}} className="link" activeClassName="selected">
            All
          </NavLink>
        </p>
        {props.categories.map((category) => renderCategoryLink(category))}

        <Admin>
          <Link
            className="link"
            to={{ pathname: `/blog/add`}}
          >
            <i className="fas fa-plus fa-5x" />
          </Link>
        </Admin>

      </aside>
    </div>
)};
