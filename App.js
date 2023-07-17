

import 'react-native-gesture-handler'
import React,{useEffect,useState,createContext} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import BottomTabnav from './src/navigations/BottomTabnav';
import PushController from './src/PushController';
export const AuthContext = createContext({ authState: {fontFemily:''}, setAuthState: () => {} });

const App=()=> {
  const [authState,setAuthState] = useState(
    {
      fontFemily:'YatraOne-Regular',
    }
    );



useEffect(()=>{
  let fun =()=>{
    SplashScreen.hide();
  }
console.log(authState);
 setTimeout(fun,2000);  
})


  return (
    <AuthContext.Provider value={[authState,setAuthState]}>

    <NavigationContainer >
   <BottomTabnav />
   <PushController/>

  </NavigationContainer>

  </AuthContext.Provider>

  );
}



export default App;
