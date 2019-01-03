import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

//import ListItem from './src/components/ListItem/ListItem';
import PlaceUserInput from './src/components/PlaceUserInput/PlaceUserInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component<Props> {
state = {
  places: []
};

placeAddedHandler = placeName => {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(placeName)
        };
        });
      };
   

  render() {
    return (
      <View style={styles.container}>
        <PlaceUserInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

    listContainer: {
    width:"80%"
  }
    
});
