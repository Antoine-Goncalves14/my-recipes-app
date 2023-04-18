import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TasksScreen from '../screens/Tasks';
import RecipesList from '../screens/RecipesList';
import RecipesDetails from '../screens/RecipesDetails';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const RecipesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipesList" component={RecipesList} />
      <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
    </Stack.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen name="Recettes" component={RecipesStack} />
        <Tabs.Screen name="List" component={TasksScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
