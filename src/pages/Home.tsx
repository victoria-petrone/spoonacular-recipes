import React, { useState, useEffect } from "react";
/* import { Link } from "react-router-dom";
 */

interface IRecipe {
  id: number;
  title: string;
  image: string;
}

function Home() {
  const key = "0d0b04ebf0cd4c9a8820941daaf1f364";
  const [listOfRecipes, setListOfRecipes] = useState<IRecipe[]>([]);

  console.log(listOfRecipes);
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch" + "?apiKey=" + key
    )
      .then((res) => res.json())
      .then(({ number, offset, results, totalResults }) =>
        setListOfRecipes(results)
      );
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

export default Home;
