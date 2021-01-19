import React from "react";
import "./styles.css";

const FooterComponent = () => {
  return (
    <div className="footer-component">
      <div className="social-network-container">
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
      <p>© 2021 Victoria Petrone. All rights reserved.</p>
    </div>
  );
};

export default FooterComponent;
