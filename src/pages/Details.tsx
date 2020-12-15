import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getRecipeInformation } from "../services/complexSearch";

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
}

function Details() {
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
          <h2 className="step-number">{number}</h2>
          {length && (
            <h4 className="step-duration">{length.number + length.unit}</h4>
          )}
          <p className="step-description">{step}</p>
        </li>
      )
    );
  };

  return (
    <div>
      <h1>{recipeDetails?.title}</h1>
      <img src={recipeDetails?.image} />
      <div>
        <h3>Summary: </h3>
        <div ref={summaryRef}></div>
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
      <ul className="instruction-container">{getInstructions()}</ul>
    </div>
  );
}

export default Details;
