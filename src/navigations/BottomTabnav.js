
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../Home';
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';

import Notifications from '../Notifications';
import Settings from '../Settings';
import More from '../More';
const Tab = createMaterialBottomTabNavigator();

const BottomTabnav =()=>{
 

return(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: 'black',height:'10%'}}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" color={color} size={20} />
        ),
      
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="bells" color={color} size={20} />
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={Settings}
      
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="more-vert" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
)
}
export default BottomTabnav;