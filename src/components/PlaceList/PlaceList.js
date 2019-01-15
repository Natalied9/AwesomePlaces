import React from 'react';
import { View, StyleSheet,  ScrollView} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
	const placesOutput = props.places.map((place, i) => (
		<ListItem 
		key={i} 
		placeName={place} 
		onItemPressed={() => props.onItemDeleted(i)}
		//onItemPressed={() => alert('Item pressed - ID: ' + i)} 
		/>
	));
	return (
		<View style={styles.listContainer}>{placesOutput}</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
    	justifyContent: 'space-between',
    	alignItems: 'center',
	}
});

export default placeList;