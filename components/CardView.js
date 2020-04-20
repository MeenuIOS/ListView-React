import React from 'react';
import { StyleSheet, View } from 'react-native';


const CardView = props => {
    return(
<View style={{...styles.card,...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card:{
       shadowRadius:6,
       shadowOpacity:0.26,
       shadowColor:'black',
       shadowOffset:{width:0,height:2},
       elevation:8,
       backgroundColor:'white',
       height:'50%',
       alignItems:'center',
       justifyContent:'center'
    },


});

export default CardView