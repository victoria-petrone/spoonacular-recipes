import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IComplexSearchConfig } from "../../services/recipeSearch";
import Select from "../select";
import "./styles.css";
import filters from "../../utils/filters";

interface ISearchProps {
  config: IComplexSearchConfig;
  setConfig: (config: IComplexSearchConfig) => void;
  placeholder: string;
  initialValue: string | null;
  isSearchPage?: boolean;
}

const Search = ({ config, setConfig, ...props }: ISearchProps) => {
  const [userQuery, setUserQuery] = useState(config.query);
  const history = useHistory();

  const handleSubmit = () => {
    if (props.isSearchPage) {
      setConfig({ ...config, query: userQuery });
    } else {
      history.push(`/search?userInput=${userQuery}`);
    }
  };

  const sanitizeSelection = (selection: string[]) => {
    let sanitizedSelection: string = "";
    selection.forEach((item, i) => {
      sanitizedSelection = sanitizedSelection + item;
      if (selection.length - 1 !== i) {
        sanitizedSelection = sanitizedSelection + ", ";
      }
    });

    return sanitizedSelection;
  };

  const changeHandler = (filter: string, selection: string[]) => {
    const newConfig = { ...config, [filter]: sanitizeSelection(selection) };
    setConfig(newConfig);
  };

  return (
    <div
      className={`search-container-${props.isSearchPage ? "search" : "home"}`}
    >
      <div
        className={`input-button-container-${
          props.isSearchPage ? "search" : "home"
        }`}
      >
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder={props.placeholder}
          className="input-element"
          type="text"
          onChange={(e) => setUserQuery(e.currentTarget.value)}
          value={userQuery}
        />
        <button
          onClick={handleSubmit}
          className="submit-button"
          disabled={!config.query.length}
        >
          Search
        </button>
      </div>
      {props.isSearchPage ? (
        <div>
          <div className="filters-container">
            {filters.map(({ name, title, options }) => (
              <Select
                key={name}
                name={name}
                title={title}
                options={options}
                onChange={changeHandler}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
