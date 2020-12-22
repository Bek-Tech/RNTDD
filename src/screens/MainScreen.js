import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

const MainScreen = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [dishName, setDishName] = useState('');

  const addRestaurant = () => {
    const restaurantObj = {restaurantName, dishName, id: Math.random()};
    setRestaurantList([...restaurantList, restaurantObj]);
    setRestaurantName('');
    setDishName('');
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <TextInput
          value={restaurantName}
          placeholder="enter restaurant name"
          testID="restaurantNameText"
          style={styles.textInput}
          onChangeText={(text) => setRestaurantName(text)}
        />
        <TextInput
          value={dishName}
          testID="dishNameText"
          style={styles.textInput}
          placeholder="enter dish name"
          onChangeText={(text) => setDishName(text)}
        />
        <Button
          title="add restaurant"
          testID="addRestaurantBtn"
          onPress={() => addRestaurant()}
        />
      </View>

      <View style={styles.bottomContainer}>
        <FlatList
          data={restaurantList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => {
            return (
              <View testID="restaurantListItem">
                <Text>{item.restaurantName}</Text>
                <Text>{item.dishName}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#14402160',
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    backgroundColor: '#19902150',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    height: 30,
    margin: 10,
    width: '95%',
  },
});
