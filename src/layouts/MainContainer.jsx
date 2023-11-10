import styled from '@emotion/styled';
import theme from 'styles/theme';

export const MainContainer = styled.div`
  width: 29.25rem;
  margin-top: 3rem;
  max-width: 90%;
  height: 70vh;
  position: relative;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media ${theme.device.tablet}, ${theme.device.phone} {
    margin-top: 1rem;
  }
`;
