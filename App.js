import React,{useState} from 'react';
import { StyleSheet, View, Button, FlatList, Alert } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import ItemInput from './components/ItemInput';
import ItemListView from './components/ItemListView';
import HeaderView from './components/HeaderView';


export default function App() {

  const [itemName ,setItem ] = useState([]);
  const [isAddMode ,setIsAddMode ] = useState(false);
    
  const addItemHandler = itemTitle =>{

    setItem(currentItem=>[...currentItem,{
      id: Math.random().toString(),value: itemTitle }
    ]);
    
    setIsAddMode(false);
};


const removeItemHandler = itemId =>{

  setItem(currentItem=>{
   return currentItem.filter((item) => item.id !== itemId)
  });
};


const cancelItemAdditionlHandler = () =>{
  setIsAddMode(false);
};


  return (
    <View style={styles.container}>
      <HeaderView title ='List of the Item'/>
      <View style= {styles.screen}>
        <Button title = 'Add the Item' onPress={()=> setIsAddMode(true)} /> 
        <ItemInput
        visible={isAddMode}
        onAddItem ={addItemHandler}
        onCancel ={cancelItemAdditionlHandler}
       />
<FlatList

keyExtractor={(item,index)=> item.id}
data={itemName}
renderItem={
itemData => <ItemListView id ={itemData.item.id} onDelete=
{
  removeItemHandler.bind(this, itemData.item.id)} title = {itemData.item.value}
/>
}
/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
