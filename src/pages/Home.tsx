import React, { useState } from "react";

import Recipe from "../components/Recipe";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [userNumber, setUserNumber] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUserInput(e.currentTarget.value)}
      />
      <input
        type="number"
        onChange={(e) => setUserNumber(e.currentTarget.value)}
      />
      <button className="button-hover" disabled={!userInput.length}>
        Search
      </button>

      <Recipe />
    </div>
  );
}

export default Home;
