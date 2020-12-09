import React, { useState, useEffect } from "react";
/* import { Link } from "react-router-dom";
 */
import getComplexSearch from "../services/complexSearch";
interface IRecipe {
  id: number;
  title: string;
  image: string;
}

function Recipe() {
  const [listOfRecipes, setListOfRecipes] = useState<IRecipe[]>([]);

  console.log(listOfRecipes);
  useEffect(() => {
    const results = getComplexSearch({ query: "pasta" });
  }, []);

  if (!listOfRecipes.length) {
    return <p>No recipes found</p>;
  }
  const list = listOfRecipes.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} />
    </div>
  ));
  return (
    <div>
      <p>WELCOMEEE to all the recipes that we offer</p>
      {list}
    </div>
  );
}

export default Recipe;
