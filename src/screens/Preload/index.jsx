import {ActivityIndicator, Image, View, Text} from 'react-native';
import {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 80, height: 80}}
        source={require('../../assets/images/academia.png')}
      />
      {loading && (
        <ActivityIndicator style={{marginTop: 30}} size="large" color="#FFF" />
      )}
    </View>
  );
};
