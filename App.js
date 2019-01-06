import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceUserInput from './src/components/PlaceUserInput/PlaceUserInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
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
