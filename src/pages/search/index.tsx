import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getComplexSearch,
  getRandomRecipes,
} from "../../services/recipeSearch";
import RecipeList from "../../components/recipeList";

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

const Search = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [pagination, setPagination] = useState<IPagination>();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userInput = searchParams.get("userInput");

  useEffect(() => {
    (async () => {
      if (userInput) {
        const response = await getComplexSearch({
          query: userInput,
          number: 20,
        });
        if (response) {
          setRecipes(response.results);
          setPagination({
            number: response.number,
            offset: response.offset,
            totalResults: response.totalResults,
          });
        }
      } else {
        const response = await getRandomRecipes();
        {
          response && setRecipes(response.recipes);
        }
      }
    })();
  }, []);

  return <div>{recipes && <RecipeList recipes={recipes} />}</div>;
};

export default Search;
