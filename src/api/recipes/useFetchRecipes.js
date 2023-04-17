import axios from 'axios';
import {REACT_APP_URL_API, REACT_APP_API_KEY} from '@env';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/actions';

const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const getAllRecipes = async () => {
    try {
      /*const response = await axios.get(REACT_APP_URL_API, {
        params: {
          apiKey: REACT_APP_API_KEY,
          number: MAX_PER_PAGE,
        },
      });*/
      const response = [
        {
          id: 716429,
          title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
          calories: 584,
          carbs: '84g',
          fat: '20g',
          image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
          imageType: 'jpg',
          protein: '19g',
        },
        {
          id: 715538,
          title:
            'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
          calories: 521,
          carbs: '69g',
          fat: '10g',
          image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
          imageType: 'jpg',
          protein: '35g',
        },
      ];

      dispatch(addRecipes(response));
      //dispatch(addRecipes(response.data.results));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  return {
    getAllRecipes,
  };
};
