import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getComplexSearch } from "../../services/complexSearch";
import RecipeList from "../../components/RecipeList";

import "./styles.css";

interface IPagination {
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
          number: 10,
        });
        setRecipes(response.results);
        setPagination({
          number: response.number,
          offset: response.offset,
          totalResults: response.totalResults,
        });
      } else {
      }
    })();
  }, []);

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Search;

// new URLSearchParams(useLocation().search);
