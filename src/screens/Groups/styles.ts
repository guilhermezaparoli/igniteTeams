import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
color: #fff;
font-size: 32px;
`