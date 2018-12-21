import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',

});

type Props = {};
export default class App extends Component<Props> {
  state= {
    placeName: ''
  };

  //creates a method so this keyword applies to the class above. user types in value 
  //in the text input and then it shows on the 
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>

        <TextInput
        style={styles.textBorder}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
        <Button title="add"/>
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
