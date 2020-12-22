import React, { useState } from "react";
//import { IRecipe } from "../pages/home";
import { Link } from "react-router-dom";
import { IRecipe } from "../../pages/search";
import "./styles.css";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = (props: IRecipeItem) => {
  return (
    <div className="recipe-container">
      <img src={props.recipe.image} />

      <h1>{props.recipe.title}</h1>
    </div>
  );
};

export default RecipeItem;
