import React, { useState } from "react";
//import { IRecipe } from "../pages/home";
import { Link } from "react-router-dom";
import { IRecipe } from "../../pages/search";
import { getRecipeInformation } from "../../services/recipeSearch";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = (props: IRecipeItem) => {
  return (
    <li>
      <h1>{props.recipe.title}</h1>
      <Link to={`/recipe/${props.recipe.id}`}>
        <img src={props.recipe.image} />
      </Link>
    </li>
  );
};

export default RecipeItem;
