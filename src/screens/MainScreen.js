import React, {useState} from 'react';
import RestaurantList from '../components/RestaurantList';
import InputField from '../components/InputField';
import {View, StyleSheet, ScrollView,Dimensions} from 'react-native';

const wHeight = Dimensions.get('window').height

const MainScreen = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const addRestaurant = (restaurantName, dishName) => {
    const restaurantObj = {restaurantName, dishName, id: Math.random()};
    setRestaurantList([...restaurantList, restaurantObj]);
  };
  return (
      <View style={styles.container}>
        <InputField addRestaurant={addRestaurant} />
        <RestaurantList test="test" restaurantsArr={restaurantList} />
      </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container:{
    height: wHeight
  }
});
