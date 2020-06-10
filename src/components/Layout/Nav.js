import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper grey">
        <div className="container">
          <a href="!#" className="brand-logo">
            <i className="large material-icons">import_contacts</i>Books App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="!#">Books</a>
            </li>
            <li>
              <a href="!#">Add Book</a>
            </li>
            <li>
              <a href="!#">Edit Book</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
