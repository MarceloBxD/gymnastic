import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {Provider as PaperProvider} from 'react-native-paper';

export default App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};
