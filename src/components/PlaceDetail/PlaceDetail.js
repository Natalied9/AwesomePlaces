import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';


//for placeDetail to display something, I need to pass placeImage and place name on 
//the props object.. on app.js
const placeDetail = props => {
	let modalContent = null;

	if (props.selectedPlace) {
		modalContent = (
		<View> 
		<Image source={props.selectedPlace.placeImage} /> 
		<Text>{props.selectedPlace.placeName}</Text>
		</View> 
			);
	}

	return ( 
	<Modal> 
	<View>
		{modalContent}
			<Button title="Delete"/>
			<Button title="Close"/>
		</View>
	</Modal>

		);
};
	


export default placeDetail; 