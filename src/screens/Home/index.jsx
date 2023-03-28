import {View, Text, Button, Dimensions, Touchable} from 'react-native';
import {
  WelcomeContainer,
  MainContainer,
  Typography,
  BasicText,
  WorkoutImage,
  FlexColumn,
  StartArea,
  Flex,
  Clickable,
  ActionButton,
  Icon,
} from './styles';

import HomeSwiper from '../../components/HomeSwiper';

const {width, height} = Dimensions.get('window');

export default Home = () => {
  const userActions = [
    {
      id: 0,
      title: 'Bem-vindo',
      icon: 'dumbbell',
    },
    {
      id: 1,
      title: 'Quiz',
      icon: 'dumbbell',
    },
    {
      id: 2,
      title: 'Termos',
      icon: 'dumbbell',
    },
  ];

  return (
    <MainContainer>
      <WelcomeContainer>
        <FlexColumn>
          <BasicText>Olá, João</BasicText>
          <Typography width={width}>
            Encontre aqui as facilidades da sua rotina de treino
          </Typography>
        </FlexColumn>
        <WorkoutImage source={require('../../assets/images/workout1.png')} />
      </WelcomeContainer>
      <StartArea>
        <BasicText>Começe por aqui</BasicText>
        <Flex>
          {userActions.map(action => (
            <Clickable key={action.id}>
              <ActionButton>
                <Icon
                  name={action.icon}
                  source={require('../../assets/images/home.png')}
                />
              </ActionButton>
              <BasicText>{action.title}</BasicText>
            </Clickable>
          ))}
        </Flex>
      </StartArea>
      <HomeSwiper />
    </MainContainer>
  );
};
