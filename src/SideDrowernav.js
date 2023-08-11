import React,{useState,useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,createNavigationContainerRef} from '@react-navigation/native';
import Home from './Home';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spalass from './Spalass';
import More from './More';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef()
const Tab = createMaterialBottomTabNavigator();


const SideDrowernav = () => {



  useEffect(() => {
    setTimeout(() => {
      
      AsyncStorage.getItem('user').then(ky => {
        if (ky) {
          if (navigationRef.isReady()) {
            navigationRef.navigate('SideDrowernav');
          }
        } else {
       
        }
      });
    }, 2000);
  }, []);


  function MyTabs() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

    );
  }
  const SideDrowerna=()=>{
    return(
<Drawer.Navigator 
    screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
      />
    </Drawer.Navigator>
    )
  } 
  const Stacknav=()=>{
    return(
       <Stack.Navigator initialRouteName="Spalass">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}  
        options={{
          headerShown:false
                }}      
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}      
      />
      <Stack.Screen
        name="SideDrowernav"
        component={SideDrowerna}   
        options={{
          headerShown:false
                }}   
      />
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}      
      />
       <Stack.Screen
        name="Home"
        component={Home}  
        options={{
  headerShown:false
        }} />
        <Stack.Screen
        name="Spalass"
        component={Spalass}  
        options={{
  headerShown:false
        }}
        
      />
    </Stack.Navigator> 
    )
  }

 
   return (
    <NavigationContainer>
      <Stacknav/>
  </NavigationContainer>
    
  )
};
export default SideDrowernav;