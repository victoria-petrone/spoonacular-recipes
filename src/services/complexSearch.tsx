import axios from "axios";

interface IComplexSearchConfig {
  query: string;
  number: number;
}
interface IRandomSearch {
  number: number;
  tags: string;
}
const key: string = "0d0b04ebf0cd4c9a8820941daaf1f364";

const urlComplex =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + key;

const getDetailsURL = (id: string) => {
  return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`;
};

/* const urlRandom =
  "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian&apiKey=" +
  key; */

export const getComplexSearch = async (config: IComplexSearchConfig) => {
  try {
    const response = await axios.get(urlComplex, {
      params: config,
    });
    return console.log(response.data);
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

/* export const getRandomRecipes = async (configs: IRandomSearch) => {
  try {
    const response = await axios.get(urlRandom, {
      params: configs,
    });
    return console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
 */
