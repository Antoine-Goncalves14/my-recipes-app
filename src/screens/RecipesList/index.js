import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {useSelector} from 'react-redux';
import {getRecipesList} from '../../redux/selectors';
import RecipeTile from '../RecipeTile';

export default function RecipesList({navigation}) {
  const [page, setPage] = useState(0);
  const {getAllRecipes} = useFetchRecipes();

  const allRecipes = useSelector(getRecipesList);

  useEffect(() => {
    getAllRecipes(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const renderItem = ({item}) => (
    <RecipeTile navigation={navigation} item={item} />
  );

  const onEndReached = () => {
    // Charger une nouvelle page - 30 nouvelles recettes
    setPage(currPage => currPage + 1);
  };

  return (
    <FlatList
      data={allRecipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      onEndReached={onEndReached}
      // eslint-disable-next-line react/no-unstable-nested-components
      ListFooterComponent={() => (
        <View style={{padding: 40}}>
          <ActivityIndicator />
        </View>
      )}
    />
  );
}
