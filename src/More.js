import React,{useEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Settings from './Settings'
import { useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Drawer = createDrawerNavigator()

const More = ({navigation}) => {
    const dimensions = useWindowDimensions();
    const { fonts } = useTheme();

    const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
    defaultStatus={'open'}
    screenOptions={{
      drawerType:'permanent',
      swipeEnabled:'true',
      drawerPosition:'right',

      drawerType: isLargeScreen ? 'permanent' : 'back',
      drawerStyle: isLargeScreen ? null : { width: '100%' },
        drawerStyle: {
          backgroundColor: 'black',
        },
      }}
    
    >
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
            swipeEnabled: false, // Set swipe gesture enabled for this screen
          }}
      
      />
    </Drawer.Navigator>
  )
}
export default More;