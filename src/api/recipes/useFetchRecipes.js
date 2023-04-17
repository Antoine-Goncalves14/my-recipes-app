import axios from 'axios';
import {REACT_APP_API_KEY, REACT_APP_BASE_URL_API} from '@env';
import {useDispatch} from 'react-redux';
import {addRecipes, selectedRecipe} from '../../redux/actions';

const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const getAllRecipes = async (page = 0) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BASE_URL_API}/complexSearch`,
        {
          params: {
            apiKey: REACT_APP_API_KEY,
            number: MAX_PER_PAGE,
            offset: page * MAX_PER_PAGE,
          },
        },
      );

      dispatch(addRecipes(response.data.results));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  const getRecipeById = async id => {
    try {
      const response = await axios.get(
        `${REACT_APP_BASE_URL_API}/${id}/information`,
        {
          params: {
            apiKey: REACT_APP_API_KEY,
          },
        },
      );
      console.log('response =>', response.data);
      dispatch(selectedRecipe(response.data));
    } catch (e) {
      console.error('Error in getRecipeById', e);
    }
  };

  return {
    getAllRecipes,
    getRecipeById,
  };
};
