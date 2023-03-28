import styled from 'styled-components/native';

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
`;

export const WelcomeContainer = styled.View`
  flex-direction: row;
  padding-top: 112px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
`;

export const Typography = styled.Text`
  width: 100%;
  max-width: ${props => props.width - 202 || '100%'};
  font-weight: bold;
  font-size: 24px;
  color: #0b0b1b;
`;

export const BasicText = styled.Text`
  text-align: left;
  margin-bottom: 8px;
  font-size: 14px;
  color: #0b0b1b;
`;

export const WorkoutImage = styled.Image`
  width: 142px;
  height: 174px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
`;

export const FlexColumn = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StartArea = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-left: 30px;
`;

export const Flex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  height: 99px;
  width: 100%;
`;

export const Clickable = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 72px;
  height: 72px;
  background-color: #fff;
`;
