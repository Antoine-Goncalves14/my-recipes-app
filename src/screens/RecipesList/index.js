import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {useSelector} from 'react-redux';
import {getRecipesList} from '../../redux/selectors';

export default function RecipesList() {
  const {getAllRecipes} = useFetchRecipes();

  const allRecipes = useSelector(getRecipesList);
  console.log('ALL RECIPES =>', allRecipes);

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <Text>Recipes List</Text>
      {allRecipes.map(recipe => (
        <Text>{recipe.title}</Text>
      ))}
    </>
  );
}
