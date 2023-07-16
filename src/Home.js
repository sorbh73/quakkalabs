import React,{useContext} from "react";
import { View,Text ,Dimensions} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { AuthContext } from "../App";
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Home=()=>{
  const [authState,setAuthState] = useContext(AuthContext);
  const {t, i18n} = useTranslation();

    useFocusEffect(
        React.useCallback(() => {
            // console.log('-----------------------')
            // console.log(props.route.params);
            // console.log(DefaultTheme);

            // console.log('-----------------------')
    
          return () => null;
        }, [])
      );
    
   
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{width:windowWidth,height:windowHeight*0.08,backgroundColor:'black'}}>
            <Text style={{fontSize:20,color:'red',left:'5%',marginTop:'5%'}}>Home</Text>
            </View>
            <Text style={{margin:'5%',fontSize:22,fontFamily:authState.fontFemily,alignSelf:'center'}}>{t('maintext')}</Text>

        </View>
    )
};
export default Home;