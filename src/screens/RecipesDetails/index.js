import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getSelectedRecipe} from '../../redux/selectors';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';

export default function RecipesDetails({route, navigation}) {
  const {id} = route.params;
  console.log(id);
  const {getRecipeById} = useFetchRecipes();

  const recipe = useSelector(getSelectedRecipe);

  useEffect(() => {
    getRecipeById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text>{id}</Text>
      <Text>{recipe.title}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Revenir</Text>
      </TouchableOpacity>
    </>
  );
}
