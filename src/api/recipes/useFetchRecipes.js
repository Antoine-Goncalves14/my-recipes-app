import axios from 'axios';

// const { getAllRecipes } = useFetchRecipes()

const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'ff141441a4be4e218d72429ce5fd3df3';
const MAX_RESULT = 30;

export const useFetchRecipes = () => {
  const getAllRecipes = async () => {
    try {
      const response = await axios.get(URL_API, {
        apiKey: API_KEY,
        number: MAX_RESULT,
      });
      console.log('response', response.data.results);
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  return {
    getAllRecipes,
  };
};
