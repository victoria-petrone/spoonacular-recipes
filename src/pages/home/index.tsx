import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const [userInput, setUserInput] = useState("");

  const history = useHistory();

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    history.push(`/search?userInput=${userInput}`);
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <img
          alt="image"
          src="https://www.judsonsmartliving.org/wp-content/uploads/Health-Foods-min.jpeg"
        />
        <div className="inputs-link-container">
          <div className="input-button-container">
            <input
              onKeyDown={(e) => handleKeypress(e)}
              placeholder="Hungry?"
              className="input-element"
              type="text"
              onChange={(e) => setUserInput(e.currentTarget.value)}
            />
            {/* <input
            placeholder="How many options?"
            className="input-element"
            type="number"
            onChange={(e) => setUserNumber(parseInt(e.currentTarget.value))}
          /> */}
            <button
              onClick={handleSubmit}
              className="submit-button"
              disabled={!userInput.length}
            >
              Search
            </button>
          </div>
          <div className="link-container">
            <Link to="/search">Advanced Search</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
