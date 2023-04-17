import axios from 'axios';
import {REACT_APP_URL_API, REACT_APP_API_KEY} from '@env';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/actions';

const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(REACT_APP_URL_API, {
        params: {
          apiKey: REACT_APP_API_KEY,
          number: MAX_PER_PAGE,
        },
      });

      dispatch(addRecipes(response.data.results));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  return {
    getAllRecipes,
  };
};
