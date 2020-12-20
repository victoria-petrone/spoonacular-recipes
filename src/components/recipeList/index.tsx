import React from "react";
import { IRecipe } from "../../pages/search";
//import { IRecipe } from "../pages/home";
import RecipeItem from "./recipe";
import "./styles.css";

interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList = (props: IRecipeListProps) => {
  return (
    <div className="recipes-list-container">
      {props.recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
