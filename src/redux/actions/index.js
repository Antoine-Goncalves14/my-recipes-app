import {ADD_RECIPES} from './actionsType.js';

export const addRecipes = data => ({
  type: ADD_RECIPES,
  payload: {
    data,
  },
});
