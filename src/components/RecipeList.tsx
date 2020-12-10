import React from "react";
import { IRecipe } from "../pages/Home";
import RecipeArtic from "./Recipe";

interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList = (props: IRecipeListProps) => {
  return (
    <div>
      <ul>
        {props.recipes.map((recipe) => (
          <RecipeArtic key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
