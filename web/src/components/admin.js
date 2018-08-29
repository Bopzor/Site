import React from 'react';

import AdminContext from '../adminContext.js';

const Admin = (props) => (
  <AdminContext.Consumer>
    {isAdmin => {
      if (props.isAdmin === !isAdmin) {
        return null;
      } 
      return props.children;
    }}
  </AdminContext.Consumer>
);

Admin.defaultProps = {
  isAdmin: true,
};

export default Admin;
