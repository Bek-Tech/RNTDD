import React, {useState} from 'react'
import { View, Text , TextInput, Button, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

const InputField = ({addRestaurant}) => {

    const [restaurantName, setRestaurantName] = useState('');
    const [dishName, setDishName] = useState('');
    const [error, setError] = useState(false);

    const handleAddRestaurant=(newRestaurantName, newDishName)=>{
      
        if (restaurantName.length === 0 || dishName.length === 0) {
            setError(true);
          } else {
            setError(false)
            addRestaurant(newRestaurantName,newDishName)
            setRestaurantName('');
            setDishName('');
          }
    }

    return <View style={styles.inputFieldContainer}>
    <Text  testID="testText">{restaurantName}</Text>
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
      onPress={() => handleAddRestaurant(restaurantName,dishName)}
    />
    
    {error?<Text testID="errorMessage">enter restaurant and dish name</Text>: null}
  </View>
        
}

InputField.propTypes={
    addRestaurant: PropTypes.func.isRequired
}


export default InputField


const styles = StyleSheet.create({
    inputFieldContainer: {
      backgroundColor: '#14402160',
      height: '30%',
      justifyContent: 'flex-end',
    },
    textInput: {
      textAlign: 'justify',
      borderBottomColor: 'blue',
      borderBottomWidth: 2,
      height: 30,
      margin: 10,
      width: '95%',
    },
  });