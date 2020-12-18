import React from "react";
import { IRecipe } from "../pages/search";
//import { IRecipe } from "../pages/home";
import RecipeItem from "./Recipe";

interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList = (props: IRecipeListProps) => {
  return (
    <div>
      <ul>
        {props.recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
