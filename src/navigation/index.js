import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TasksScreen from '../screens/Tasks';
import RecipesList from '../screens/RecipesList';
import RecipesDetails from '../screens/RecipesDetails';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RecipesList" component={RecipesList} />
        <Stack.Screen name="TasksList" component={TasksScreen} />
        <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
