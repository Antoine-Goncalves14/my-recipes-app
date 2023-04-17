import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function RecipesDetails({navigation}) {
  return (
    <>
      <Text>Ici les détails</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Revenir</Text>
      </TouchableOpacity>
    </>
  );
}
