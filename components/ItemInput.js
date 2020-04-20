import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput,Modal } from 'react-native';

import HeaderView from './HeaderView';
import CardView from './CardView';
const ItemInput = props => {

    const [enteredItem ,setEnteredItem ] = useState('');
     
    const itemInputHandler = enteredText =>{
     setEnteredItem(enteredText);
    };

    const addItemHandler =() =>{

        props.onAddItem(enteredItem);
        setEnteredItem();
    }
    return(
        <Modal visible = {props.visible} animationType= "slide">
<HeaderView title ='Add the Item Name'/>
<View style={styles.inputContainer}>
    <CardView>
  <TextInput
  placeholder ='Enter the Item Name'
  style ={styles.input}
  onChangeText={itemInputHandler}
  value={enteredItem}
  />

<View style= {styles.buttonContainer}> 
 <Button title = 'Cancel' color='blue'  onPress={props.onCancel}/>
    <Button title = 'Add' color='#f7287b' onPress={addItemHandler}/>
    </View>
    </CardView>
    </View>

    </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
       flex:1,
       alignItems:'center',
       justifyContent: 'flex-start',
       padding:20

    },
    input:{
        width:200,
        borderWidth:1,
        padding:10,
        borderColor:'black',
       marginBottom:30
 
     },
    buttonContainer:{
        flexDirection:'row',
        marginLeft:60,
        justifyContent: 'space-between',
        width:'50%' ,
        
    },
    button:{
     width:'40%',
     alignItems:'center'
    },

});

export default ItemInput