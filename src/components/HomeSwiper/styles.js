import styled from 'styled-components/native';

export const CardItem = styled.View`
  width: 152px;
  height: 120px;
  border-radius: 8px;
  background-color: #0b0b1b;
  margin-right: 16px;
  padding: 16px;
`;

export const CardItemIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const CardItemText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 72px;
  width: 100%;
  height: 120px;
  gap: 16px;
`;
