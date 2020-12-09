import React from "react";
import { IRecipe } from "../pages/Home";

interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList = (props: IRecipeListProps) => {
  return (
    <ul>
      {props.recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.title}</li>;
      })}
    </ul>
  );
};

export default RecipeList;
