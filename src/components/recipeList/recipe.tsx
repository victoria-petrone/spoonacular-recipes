import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IRecipe } from "../../pages/search";
import "./styles.css";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = (props: IRecipeItem) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    ref.current && ref.current.addEventListener("mouseenter", enter);
    ref.current && ref.current.addEventListener("mouseleave", leave);
  }, []);

  const iconClassName = hovered ? "ri-heart-line favorite" : "";

  return (
    <div className="recipe-container" ref={ref}>
      <i className={iconClassName}></i>
      <img src={props.recipe.image} />
      <Link to={`/recipe/${props.recipe.id}`} className="recipe-link">
        <h1>{props.recipe.title}</h1>
      </Link>
    </div>
  );
};

export default RecipeItem;
