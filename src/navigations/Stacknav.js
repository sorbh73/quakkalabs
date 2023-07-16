import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../Settings';
const Stack = createStackNavigator();

const Stacknav = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
       
      />
      {/* <Stack.Screen
        name="GymExerciseIndex"
        component={GymExerciseIndexScreen}
        options={{
          headerTitle: 'Gym Exercise Index',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default Stacknav;
