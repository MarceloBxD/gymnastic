import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabs from '../MainTabs';
import Preload from '../../screens/Preload';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen
      options={{
        animation: 'slide_from_bottom',
      }}
      name="Main"
      component={MainTabs}
    />
  </Stack.Navigator>
);
