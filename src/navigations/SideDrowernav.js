import { createDrawerNavigator } from '@react-navigation/drawer'
import Settings from '../Settings'
const Drawer = createDrawerNavigator()


const SideDrowernav = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  )
};
