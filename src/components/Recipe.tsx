import React from "react";
import { IRecipe } from "../pages/Home";

interface IRecipeArti {
  recipe: IRecipe;
}

const RecipeArtic = (props: IRecipeArti) => {
  return (
    <li>
      <h1>{props.recipe.title}</h1>
      <img src={props.recipe.image} />
    </li>
  );
};

export default RecipeArtic;
