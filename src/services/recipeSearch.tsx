import axios from "axios";
import { IPagination, IRecipe } from "../pages/search";

export interface IComplexSearchConfig {
  query: string;
  number: number;
  offset: number;
  cuisine?: string;
  intolerance?: string;
  diet?: string;
}

interface IComplexResponse extends IPagination {
  results: IRecipe[];
}

interface IRandomResponse {
  recipes: IRecipe[];
}

// const key: string = "0d0b04ebf0cd4c9a8820941daaf1f364";
// const key: string = "6b5e835d093a4825b6f91e07e8970e5d";
const key: string = "6ce4ba2828054da3930808a2db423f1e";

const urlComplex = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + key;

const getDetailsURL = (id: string) => {
  return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`;
};

const urlRandom = "https://api.spoonacular.com/recipes/random?number=20&tags=vegetarian&apiKey=" + key;

export const getComplexSearch = async (config: IComplexSearchConfig): Promise<IComplexResponse | undefined> => {
  try {
    const response = await axios.get(urlComplex, {
      params: config,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipeInformation = async (id: string) => {
  try {
    const response = await axios.get(getDetailsURL(id));

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRandomRecipes = async (): Promise<IRandomResponse | undefined> => {
  try {
    const response = await axios.get(urlRandom);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
