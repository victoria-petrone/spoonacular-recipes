import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getComplexSearch,
  getRandomRecipes,
  IComplexSearchConfig,
} from "../../services/recipeSearch";
import RecipeList from "../../components/recipeList";
import Search from "../../components/search";
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
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [pagination, setPagination] = useState<IPagination>();
  //state
  //const [value, setValue] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userInput = searchParams.get("userInput");

  const complexSearch = async (config: IComplexSearchConfig) => {
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
      if (userInput) {
        complexSearch({ query: userInput });
      } else {
        const response = await getRandomRecipes();
        {
          response && setRecipes(response.recipes);
        }
      }
    })();
  }, [userInput]);

  const onSubmit = (config: IComplexSearchConfig) => {
    complexSearch(config);
  };

  return (
    <div>
      <Search
        placeholder="What do you wanna eat?"
        onSubmit={onSubmit}
        //send via props
        //value={value}
      />
      <div>{recipes && <RecipeList recipes={recipes} />}</div>
    </div>
  );
};

export default SearchPage;
