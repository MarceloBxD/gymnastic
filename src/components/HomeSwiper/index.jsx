import {Card, CardItem, CardItemIcon, CardItemText, Container} from './styles';
import {FlatList} from 'react-native';

const itemsSwiper = [
  {
    id: 0,
    label: 'perfil',
    icon: 'list',
  },
  {
    id: 1,
    label: 'Dieta',
    icon: 'list',
  },
  {
    id: 3,
    label: 'Treino',
    icon: 'list',
  },
];

export default () => {
  return (
    <Container>
      {/* {itemsSwiper.map(item => (
          <CardItem key={item.id}>
            <CardItemIcon source={require('../../assets/images/home.png')} />
            <CardItemText>{item.label}</CardItemText>
          </CardItem>
        ))} */}
      <FlatList
        data={itemsSwiper}
        renderItem={({item}) => (
          <CardItem
            style={{
              marginLeft: item.id === 0 ? 30 : 0,
            }}
            key={item.id}>
            <CardItemIcon source={require('../../assets/images/home.png')} />
            <CardItemText>{item.label}</CardItemText>
          </CardItem>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
