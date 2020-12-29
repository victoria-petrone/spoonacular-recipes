import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IComplexSearchConfig } from "../../services/recipeSearch";
import Select from "../select";
import "./styles.css";
import filters from "../../utils/filters";

interface ISearchProps {
  onSubmit?: (config: IComplexSearchConfig) => void;
  placeholder: string;
  initialValue: string | null;
  isSearchPage?: boolean;
}

const Search = (props: ISearchProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [config, setConfig] = useState<IComplexSearchConfig>({
    query: props.initialValue || "",
  });

  const history = useHistory();

  const handleSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit(config);
    } else {
      history.push(`/search?userInput=${config.query}`);
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
    props.onSubmit?.(newConfig);
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
          onChange={(e) =>
            setConfig({ ...config, query: e.currentTarget.value })
          }
          value={config.query}
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
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
          {isOpen ? <div className="div-extra-recipe-list"></div> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
