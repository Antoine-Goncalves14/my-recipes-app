import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function RecipesDetails({route, navigation}) {
  const {id} = route.params;
  console.log(id);

  return (
    <>
      <Text>Ici les détails</Text>
      <Text>{id}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Revenir</Text>
      </TouchableOpacity>
    </>
  );
}
