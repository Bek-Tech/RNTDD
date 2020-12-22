import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const MainScreen = () => {
    const [restaurantList, setRestaurantList] = useState([])
  const [restaurantName, setRestaurantName] = useState(null);
  const [dishName, setDishName] = useState(null);

  const addRestaurant= ()=>{
      const restaurantObj= {restaurantName, dishName}
      setRestaurantList([...restaurantList, restaurantObj])
      setRestaurantName('')
      setDishName('')
  }
return <View style={styles.rootContainer}>
     <View style={styles.topContainer}>
        <TextInput
        value={restaurantName}
          placeholder="enter restaurant name"
          style={styles.textInput}
          onChangeText={(text) => setRestaurantName(text)}
        />
        <TextInput
          value={dishName}
          style={styles.textInput}
          placeholder="enter dish name"
          onChangeText={(text) => setDishName(text)}
        />
        <Button title="add restaurant" testID="addRestaurantBtn" onPress={()=>addRestaurant()} />
      </View>

      <View style={styles.bottomContainer}>
        <Text testID="restaurantNameText">{restaurantName}</Text>
        <Text testID="dishNameText">{dishName}</Text>
      </View>
</View>
};

export default MainScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
    },
    topContainer:{
        backgroundColor:'#14402160',
        flex:1,
        justifyContent: 'center'
    },
    bottomContainer:{
        backgroundColor:'#19902150',
        flex:1,
        justifyContent: 'center'
    },
    textInput:{
        borderBottomColor:'blue',
        borderBottomWidth: 2,
        height: 30,
        margin:10,
        width: '95%'

    }
})
