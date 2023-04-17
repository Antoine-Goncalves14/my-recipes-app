import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getSelectedRecipe} from '../../redux/selectors';

export default function RecipesDetails({route, navigation}) {
  const {id} = route.params;
  console.log(id);

  const recipe = useSelector(getSelectedRecipe);

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
