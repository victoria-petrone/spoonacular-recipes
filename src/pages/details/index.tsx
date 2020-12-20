import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getRecipeInformation } from "../../services/recipeSearch";
import "./styles.css";
interface IStep {
  length: { number: number; unit: string };
  number: number;
  step: string;
}
interface IRecipeDetails {
  id: number;
  title: string;
  summary: string;
  image: string;
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  analyzedInstructions: Array<{ name: string; steps: Array<IStep> }>;
  extendedIngredients: Array<{ originalString: string; id: number }>;
}

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [recipeDetails, setRecipeDetails] = useState<IRecipeDetails>();
  const summaryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async () => {
      const results = await getRecipeInformation(id);
      setRecipeDetails(results);
    })();
  }, [id]);

  useEffect(() => {
    if (summaryRef.current && recipeDetails) {
      summaryRef.current.innerHTML = recipeDetails.summary;
    }
  }, [recipeDetails]);

  const getInstructions = () => {
    return recipeDetails?.analyzedInstructions?.[0].steps.map(
      ({ number, length, step }) => (
        <li key={number}>
          <h3 className="step-number">{number}</h3>
          {length && (
            <h5 className="step-duration">{length.number + length.unit}</h5>
          )}
          <p className="step-description">{step}</p>
        </li>
      )
    );
  };

  const getIngredients = () => {
    return recipeDetails?.extendedIngredients.map(({ id, originalString }) => (
      <li key={id}>
        <p>{originalString}</p>
      </li>
    ));
  };

  return (
    <div className="recipe-detail-container">
      <h1>{recipeDetails?.title}</h1>
      <img src={recipeDetails?.image} />
      <div className="all">
        <div className="summary-container">
          <h2>SUMMARY </h2>
          <p ref={summaryRef}></p>
        </div>
        <div className="diet-information">
          {recipeDetails?.vegan ? (
            <i className="ri-check-line">Vegan</i>
          ) : (
            <i className="ri-close-fill">Vegan</i>
          )}
          <br />
          {recipeDetails?.vegetarian ? (
            <i className="ri-check-line">Vegetarian</i>
          ) : (
            <i className="ri-close-fill">Vegetarian</i>
          )}
          <br />
          {recipeDetails?.glutenFree ? (
            <i className="ri-check-line">GlutenFree</i>
          ) : (
            <i className="ri-close-fill">GlutenFree</i>
          )}
        </div>
        <div className="ingredients-container">
          <h2>INGREDIENTS</h2>
          <ul>{getIngredients()}</ul>
        </div>
        <div className="instructions-container">
          <h2>INSTRUCTIONS</h2>
          <ul>{getInstructions()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
