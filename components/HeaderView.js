import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderView = props => {
    return(
<View style={styles.header}>
    <Text style ={styles.headerTitle}>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    header:{
       width:'100%',
       height:150,
       paddingTop:50,
       backgroundColor:'#f7287b',
       alignItems:'center',
       justifyContent: 'center'

    },
    headerTitle:{
        paddingTop:50,
        color:'black',
        fontSize:18 
    }

});

export default HeaderView