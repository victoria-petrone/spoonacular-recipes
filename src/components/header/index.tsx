import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
//import logo from "./logo1.jpg";

const logo = require("./pngwing.png");

function Header() {
  const { pathname } = useLocation();
  const getClassName = (path: string) => {
    return `nav-link${pathname === path ? "-active" : ""}`;
  };

  return (
    <div className="header-container">
      <img src={logo} alt="looogo" className="logo" />

      <Link to="/" className={getClassName("/")}>
        Home
      </Link>
      <Link to="/favorite" className={getClassName("/favorite")}>
        Favorites
      </Link>
      <Link to="/about" className={getClassName("/about")}>
        About
      </Link>
    </div>
  );
}

export default Header;
