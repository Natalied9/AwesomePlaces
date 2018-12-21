import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',

});

type Props = {};
export default class App extends Component<Props> {
  state= {
    placeName: '',
    places: []
  };

  //creates a method so this keyword applies to the class above. user types in value 
  //in the text input and then it shows on the 
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

    placeSubmitHandler = () => {
      if (this.state.placeName.trim() === "") {
        return;
      }

      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
      });
    };

  render() {
    const placesOutput = this.state.places.map(place => 
      <Text>{place} </Text>
      );

    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>

        <TextInput
        style={styles.textBorder}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
        <Button 
        title="add"
        style={styles.placeButton}
        onPress={this.placeSubmitHandler}
        />
        </View>

        <View>
        {placesOutput}

        </View>
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


  textBorder: {
    width: 200, 
    borderColor:"black", 
    borderWidth: 1},

    inputContainer :{
   //   flex: 1,
      flexDirection: "row",
      justifyContent: "space-between"
    }

    
});
