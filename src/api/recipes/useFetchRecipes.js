import axios from 'axios';
import {URL_API, API_KEY} from '@env';

// const { getAllRecipes } = useFetchRecipes()

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
