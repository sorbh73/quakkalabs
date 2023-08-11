import React,{useEffect,useState} from "react";
import { View,Text,ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Spalass=({navigation})=>{


    useEffect(() => {
      setTimeout(() => {
        
        AsyncStorage.getItem('user').then(ky => {
            console.log(ky);
          if (ky) {
            navigation.navigate('SideDrowernav');
          } else {
            navigation.navigate('LoginScreen');

          }
        });
      }, 2000);
    }, []);

return(
    <View style={{flex:1,justifyContent:'center'}}>
        <ActivityIndicator size={'large'} color={'black'} style={{alignSelf:'center'}}  />

    </View>
)
}

export default Spalass;