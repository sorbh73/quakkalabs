

import 'react-native-gesture-handler'
import React,{useEffect,useState,createContext} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer ,createNavigationContainerRef} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SideDrowernav from './src/SideDrowernav';
import { Provider as StoreProvider } from "react-redux";
import store from './src/auth/store';
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App=()=> {

useEffect(()=>{

  let fun =()=>{
    SplashScreen.hide();
  }
 setTimeout(fun,2000);  
})


  return (
    <StoreProvider store={store}>
<SafeAreaProvider style={{ flex: 1 }}>


   
  <SideDrowernav/>
 </SafeAreaProvider>
  </StoreProvider>


  );
}



export default App;
