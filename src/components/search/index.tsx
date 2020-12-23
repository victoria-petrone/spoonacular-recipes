import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IComplexSearchConfig } from "../../services/recipeSearch";
import "./styles.css";

interface ISearchProps {
  onSubmit?: (config: IComplexSearchConfig) => void;
  placeholder: string;
  //optional
  //value?: string;
}

const Search = (props: ISearchProps) => {
  const [userInput, setUserInput] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit({ query: userInput });
      history.push(`/search?userInput=${userInput}`);
    } else {
      history.push(`/search?userInput=${userInput}`);
    }
  };

  return (
    <div className="input-button-container">
      <input
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder={props.placeholder}
        className="input-element"
        type="text"
        onChange={(e) => setUserInput(e.currentTarget.value)}
        //value
        //value={props.value}
      />
      <button
        onClick={handleSubmit}
        className="submit-button"
        disabled={!userInput.length}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
