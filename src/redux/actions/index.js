import {
  ADD_RECIPES,
  ADD_TASK,
  DELETE_TASK,
  SELECTED_RECIPE,
  STEPS_RECIPE,
  TOOGLE_TASK,
} from './actionsType.js';

// Recipes
export const addRecipes = data => ({
  type: ADD_RECIPES,
  payload: {
    data,
  },
});

export const selectedRecipe = data => ({
  type: SELECTED_RECIPE,
  payload: {
    data,
  },
});

export const stepsRecipe = data => ({
  type: STEPS_RECIPE,
  payload: {
    data,
  },
});

// Tasks
// ADD_Task
export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
}

// TOOGLE_TASK
export function toogleTask(id) {
  return {
    type: TOOGLE_TASK,
    payload: {
      id,
    },
  };
}

// DELETE_TASK
export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
}
