import React,{useState,useContext} from "react";
import { View,Text,Dimensions } from "react-native";
import { DefaultTheme,useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import './assets/lang/i18n';
import { AuthContext } from "../App";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Notifications=()=>{
    const {t, i18n} = useTranslation();
    const [authState,setAuthState] = useContext(AuthContext);


    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{width:windowWidth,height:windowHeight*0.08,backgroundColor:'black'}}>
            <Text style={{fontSize:20,color:'red',left:'5%',marginTop:'5%'}}>Notifications</Text>
            </View>
            <Text style={{margin:'5%',fontSize:22,fontFamily:authState.fontFemily}}>{t('hello')}</Text>
            <Text style={{margin:'5%',fontSize:22,fontFamily:authState.fontFemily,alignSelf:'center'}}>{t('maintext')}</Text>
        </View>
    )
};
export default Notifications;