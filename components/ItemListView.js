import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const ItemListView = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.viewLayout}>
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  viewLayout: {

    padding: 10,
    // marginVertical: 10,
    backgroundColor: '#f7287b',
    borderColor: 'white',
    borderWidth: 1,
    width: 300,
    alignItems: 'center'
  },
  textTitle: {

    color: 'white',
    fontSize: 18,

  }

});



export default ItemListView