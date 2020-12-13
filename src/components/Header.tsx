import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-component">
      <Link to="/" className="header-links">
        All Recipes
      </Link>
      <Link to="/favorite" className="header-links">
        My Favorites
      </Link>
    </div>
  );
}

export default Header;
