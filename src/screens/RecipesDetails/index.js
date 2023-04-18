import React, {useEffect} from 'react';
import {Text, Image, StyleSheet, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {getSelectedRecipe, getStepsRecipe} from '../../redux/selectors';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import Ingredient from '../Ingredient';

export default function RecipesDetails({route, navigation}) {
  const {id} = route.params;

  const {getRecipeById, getRecipeBySteps} = useFetchRecipes();

  const recipe = useSelector(getSelectedRecipe);
  const stepsRecipe = useSelector(getStepsRecipe);
  console.log('recipe =>', stepsRecipe);

  useEffect(() => {
    getRecipeById(id);
    getRecipeBySteps(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!recipe) {
    return <View />;
  }

  return (
    <ScrollView>
      <Image source={{uri: recipe.image}} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.caption}>
        Ready in {recipe.readyInMinutes} minutes
      </Text>
      <Text style={styles.caption}>{recipe.summary}</Text>
      <View style={styles.containerIng}>
        <Text style={styles.titleIng}>Ingrédients :</Text>
        {recipe.extendedIngredients?.map(ing => (
          <Ingredient ing={ing} />
        ))}
      </View>

      <View style={styles.containerIng}>
        <Text style={styles.titleIng}>Steps :</Text>
        {stepsRecipe.steps?.map(recipe => (
          <Text>{recipe.step}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
  },
  containerIng: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 6,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  titleIng: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
