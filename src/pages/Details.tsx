import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Interface } from "readline";
import { getRecipeInformation } from "../services/complexSearch";

interface IRecipeDetails {
  id: number;
  title: string;
  summary: string;
  image: string;
  vegan: boolean;
  vegetarian: boolean;
  instructions: string;
}

function Details() {
  const { id } = useParams<{ id: string }>();
  const [recipeDetails, setRecipeDetails] = useState<IRecipeDetails>();

  useEffect(() => {
    (async () => {
      const results = await getRecipeInformation(id);
      setRecipeDetails(results);
    })();
  }, [id]);
  return (
    <div>
      <h1>{recipeDetails?.title}</h1>
      <img src={recipeDetails?.image} />
      <h3>{recipeDetails?.instructions}</h3>
      {recipeDetails?.vegan ? <p>Vegan</p> : <p>Not Vegan</p>}
      {recipeDetails?.vegetarian ? <p>Vegetarian</p> : <p>Not Vegetarian</p>}
    </div>
  );
}

export default Details;
