import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IComplexSearchConfig } from "../../services/recipeSearch";
import Select from "../select";
import "./styles.css";
import filtersData from "../../utils/filters";

interface ISearchProps {
  config: IComplexSearchConfig;
  setConfig: (config: IComplexSearchConfig) => void;
  placeholder: string;
  initialValue: string | null;
  isSearchPage?: boolean;
}

interface IFilters {
  cuisine?: string;
  diet?: string;
  intolerances?: string;
}

const Search = ({ config, ...props }: ISearchProps) => {
  const [userQuery, setUserQuery] = useState(config.query);
  const [filters, setFilters] = useState<IFilters>();
  const { push, location } = useHistory();

  const handleSubmit = () => {
    if (props.isSearchPage) {
      push(`/search?userInput=${userQuery}`);
    } else {
      push(`/search?userInput=${userQuery}`);
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

  const changeHandler = (filterName: string, selection: string[]) => {
    const newFilters = {
      ...filters,
      [filterName]: sanitizeSelection(selection),
    };

    const cleanedFilters = Object.fromEntries(
      Object.entries(newFilters).filter((f) => f[1] !== "")
    );
    setFilters(cleanedFilters);
    const { pathname, search } = location;
    const oldPath = pathname + `?userInput=${userQuery}`;
    const getFilters = () => {
      if (Object.keys(cleanedFilters).length === 0) {
        return "";
      }
      return "&filters=" + JSON.stringify(cleanedFilters);
    };

    push(oldPath + getFilters());
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
            {filtersData.map(({ name, title, options }) => (
              <Select
                key={name}
                selectedFilters={filters?.[name]}
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
