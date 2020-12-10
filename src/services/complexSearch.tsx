import axios from "axios";

interface IComplexSearchConfig {
  query: string;
  number: number;
}

const key: string = "0d0b04ebf0cd4c9a8820941daaf1f364";
const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + key;
const getComplexSearch = async (config: IComplexSearchConfig) => {
  try {
    const response = await axios.get(url, {
      params: config,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getComplexSearch;
