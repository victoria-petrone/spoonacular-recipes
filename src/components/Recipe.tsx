import React, { useState } from "react";
import { IRecipe } from "../pages/home";
import { Link } from "react-router-dom";
import { getRecipeInformation } from "../services/complexSearch";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = (props: IRecipeItem) => {
  return (
    <li>
      <h1>{props.recipe.title}</h1>
      <h2>{props.recipe.id}</h2>
      <Link to={`/${props.recipe.id}`}>
        <img src={props.recipe.image} />
      </Link>
    </li>
  );
};

export default RecipeItem;
