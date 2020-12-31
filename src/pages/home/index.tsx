import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Search from "../../components/search";
import { IComplexSearchConfig } from "../../services/recipeSearch";

const Home = () => {
  const [config, setConfig] = useState<IComplexSearchConfig>({
    query: "",
    offset: 0,
    number: 10,
  });
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="inputs-link-container">
          <Search
            config={config}
            setConfig={setConfig}
            placeholder="Hungry?"
            initialValue={""}
          />
          <div className="link-container">
            <Link to="/search">Advanced Search</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
