import React, { useState } from "react";
import { getComplexSearch } from "../services/complexSearch";
import RecipeList from "../components/RecipeList";

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

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [userNumber, setUserNumber] = useState<number>(10);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [pagination, setPagination] = useState<IPagination>();

  const handleSubmit = async () => {
    const response = await getComplexSearch({
      query: userInput,
      number: userNumber,
    });
    setRecipes(response.results);
    setPagination({
      number: response.number,
      offset: response.offset,
      totalResults: response.totalResults,
    });
  };

  return (
    <div className="inputs-container">
      <input
        placeholder="What do you wanna eat?"
        className="input-element"
        type="text"
        onChange={(e) => setUserInput(e.currentTarget.value)}
      />
      <input
        placeholder="How many options?"
        className="input-element"
        type="number"
        onChange={(e) => setUserNumber(parseInt(e.currentTarget.value))}
      />
      <button
        onClick={handleSubmit}
        className="button-hover"
        disabled={!userInput.length}
      >
        Search
      </button>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
