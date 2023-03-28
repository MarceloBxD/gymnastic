import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Workout from '../../screens/Workout';

const Tab = createMaterialBottomTabNavigator();

export default MainTabs = () => {
  return (
    <Tab.Navigator
      shifting={true}
      barStyle={{
        backgroundColor: '#FFF',
      }}
      activeColor="#A0A0A0"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              selectionColor="transparent"
              size={26}
            />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Workout',
          tabBarBadge: 3,

          tabBarIcon: () => (
            <MaterialCommunityIcons name="dumbbell" size={26} />
          ),
        }}
        name="Workout"
        component={Workout}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={26} />,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
