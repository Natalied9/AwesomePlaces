import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceUserInput extends Component {
    state = {
    placeName: ''
    //places: []
  };

  //creates a method so this keyword applies to the class above. user types in value 
  //in the text input and then it shows on the 
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
 
 placeSubmitHandler = () => {
      if (this.state.placeName.trim() === "") {
        return;
      }

      this.props.onPlaceAdded(this.state.placeName);
    };

	render() {
		return (
		<View style={styles.inputContainer}>
		<TextInput
        style={styles.textBorder}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
        <Button 
        title='add'
        style={styles.placeButton}
        onPress={this.props.onPlaceAdded}
        />
       
</View>
		);
	}
}


const styles = StyleSheet.create({
	
 inputContainer :{
   //   flex: 1,
   flexDirection: "row",
   justifyContent: "space-between"
    },

  textBorder: {
    width: 200, 
    borderColor:"black", 
    borderWidth: 1
  },


});


	export default PlaceUserInput;