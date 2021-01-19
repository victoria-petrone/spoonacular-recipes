import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const logo = require("./pngwing.png");

function Header() {
  const { pathname } = useLocation();
  const getClassName = (path: string) => {
    return `nav-link${pathname === path ? "-active" : ""}`;
  };

  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="looogo" className="logo" />
      </Link>
      <div className="links-container">
        <Link to="/" className={getClassName("/")}>
          Home
        </Link>

        <Link to="/about" className={getClassName("/about")}>
          About
        </Link>
      </div>
      <div className="social-network-container-header">
        <a href="https://github.com/vico-design" target="_blank">
          <i className="ri-github-fill" />
        </a>
        <a
          href="https://www.linkedin.com/in/maria-victoria-petrone/"
          target="_blank"
        >
          <i className="ri-linkedin-box-fill" />
        </a>

        <a
          href="https://www.xing.com/profile/MariaVictoria_Petrone/cv"
          target="_blank"
        >
          <i className="ri-xing-fill" />
        </a>
      </div>
    </div>
  );
}

export default Header;
