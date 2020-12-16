import React, { useState } from "react";
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
    <div className="home-container">
      <div className="image-container">
        <img
          alt="image"
          src="https://www.judsonsmartliving.org/wp-content/uploads/Health-Foods-min.jpeg"
        />
        <div className="inputs-container">
          <input
            placeholder="Hungry?"
            className="input-element"
            type="text"
            onChange={(e) => setUserInput(e.currentTarget.value)}
          />
          {/* <input
            placeholder="How many options?"
            className="input-element"
            type="number"
            onChange={(e) => setUserNumber(parseInt(e.currentTarget.value))}
          /> */}
          <button
            onClick={handleSubmit}
            className="submit-button"
            disabled={!userInput.length}
          >
            Search
          </button>
        </div>
      </div>
      {/*       <RecipeList recipes={recipes} />
       */}
    </div>
  );
};

export default Home;
