import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getComplexSearch,
  getRandomRecipes,
  IComplexSearchConfig,
} from "../../services/recipeSearch";
import RecipeList from "../../components/recipeList";
import Search from "../../components/search";
import Pagination from "./../../components/pagination";
import "./styles.css";

export interface IPagination {
  number: number;
  offset: number;
  totalResults: number;
}
export interface IRecipe {
  id: number;
  image: string;
  title: string;
}

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [config, setConfig] = useState<IComplexSearchConfig>({
    query: searchParams.get("userInput") || "",
    offset: 0,
    number: 10,
  });
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [pagination, setPagination] = useState<IPagination>();

  const changePage = (action: "previous" | "next") => {
    const newOffset =
      action === "next"
        ? config.offset + config.number
        : config.offset - config.number;
    const newConfig = { ...config, offset: newOffset };
    setConfig(newConfig);
    // complexSearch(newConfig);
  };

  const complexSearch = async (config: IComplexSearchConfig) => {
    console.log(searchParams.get("userInput"));
    const response = await getComplexSearch(config);
    if (response) {
      setRecipes(response.results);
      setPagination({
        number: response.number,
        offset: response.offset,
        totalResults: response.totalResults,
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (config.query) {
        complexSearch(config);
      } else {
        const response = await getRandomRecipes();
        response && setRecipes(response.recipes);
      }
    })();
  }, [config]);

  return (
    <div>
      <Search
        config={config}
        setConfig={setConfig}
        placeholder="What do you wanna eat?"
        initialValue={searchParams.get("userInput")}
        isSearchPage
      />
      <div>{recipes && <RecipeList recipes={recipes} />}</div>
      {pagination && (
        <Pagination
          number={pagination?.number}
          offset={pagination?.offset}
          totalResults={pagination?.totalResults}
          changePage={changePage}
        />
      )}
    </div>
  );
};

export default SearchPage;
