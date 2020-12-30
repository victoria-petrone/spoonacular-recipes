import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Search from "../../components/search";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="inputs-link-container">
          <Search placeholder="Hungry?" initialValue={""} />
          <div className="link-container">
            <Link to="/search">Advanced Search</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
