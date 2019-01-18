import React from 'react';
import { View, StyleSheet,  FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
	return (
		<FlatList 
		style={styles.listContainer}
		//items in our data need to be objects which have a key property, not arrary 
		//of string but array of objects
		data={props.places}
		renderItem={(info) => (
		<ListItem 
		//retreiving from app.js, where in placeAddedHandler we assign
		//place to a value
		placeName={info.item.value} 
		onItemPressed={() => props.onItemDeleted(info.item.key)}
		/>
	)}
		/>
);
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
    	//justifyContent: 'space-between',
    	//alignItems: 'center',
	}
});

export default placeList;