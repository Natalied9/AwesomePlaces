import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceUserInput from './src/components/PlaceUserInput/PlaceUserInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-beach.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

// explanation of 
//https://appdividend.com/2018/07/30/react-native-create-delete-functionality/

export default class App extends Component {
state = {
  places: [],
  //initially null, it will change when the user selects it
  selectedPlace: null
};

placeAddedHandler = placeName => {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            //needs a key, so math.random will generate a key for each object
            //that is added to the list
            key: Math.random(), 
            value: placeName,
            image: placeImage
        })
        };
      });
    };


  //store which place was selected so we can pass it to our placedetail modal
    placeSelectedHandler = key => { 
      this.setState (prevState => {
        return {
          //look at the current state of the places array and run the 
          //find method on the array
          selectedPlace: prevState.places.find(place => {
            //return true if the key of the place we're running the function on 
            //right now is the key of the place we receive in PlaceSelected Handler  
            return place.key === key;
          })
        };
      });
  };
  //we get the index of the element which is deleted and then update our state immutably,
  //so that the places array is the places array without the item we just deleted
//placeSelectedHandler = key => {
  //get the previous state because set state runs asynchronously
//this.setState(prevState => {
  //return an object which is merged with the state where the places array 
  //(without the element we want to delete) should be.. so we can use the previous
  //state places and with the filter method, a default js array method which will
  //return a new array of all the elements that match the filter criteria
  //as defined in the function we pass to filter
  //SO, we will pass an arrow function to be executed on all elements in the
  //places array 
//return { places: prevState.places.filter(place => {
    //return result of check: if the key in array is not equal
//return place.key !== key;
//   })
//    };
//  });
//  };


  render() {
    return (
      <View style={styles.container}>
      //if null
        <PlaceDetail selectedPlace={this.state.selectedPlace}/>
        <PlaceUserInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.state.places} 
        onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },

    listContainer: {
    width:"80%",

  }
    
});
