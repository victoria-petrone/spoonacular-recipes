import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">All Recipes</Link>
      <Link to="/favorite">My Favorites</Link>
    </div>
  );
}

export default Header;
