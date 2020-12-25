import React from 'react'
import { View, Text ,FlatList, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';


const RestaurantList = ({restaurantsArr}) => {
    return <View style={styles.listContainer}>
        <FlatList
        style={{flex:1}}
          data={restaurantsArr}
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
}
RestaurantList.defaultProps={
    restaurantsArr: []
}

RestaurantList.propTypes={
    restaurantsArr: PropTypes.array
}

export default RestaurantList

const styles= StyleSheet.create({
    listContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
      },
})
