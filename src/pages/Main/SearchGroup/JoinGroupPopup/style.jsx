import styled from '@emotion/styled';
import theme from 'styles/theme';

export const GroupInfoDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin-top: 1rem;
  > div {
    font-weight: 600;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

export const ButtonDiv = styled.div`
  width: 50%;
  height: 2.3rem;
  text-align: center;
  color: ${(props) => (props.primary ? '#fff' : 'var(--color-primary)')};
  background-color: ${(props) => (props.primary ? 'var(--color-primary)' : '')};
  border: 1px solid ${(props) => (!props.primary ? 'var(--color-primary)' : '')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.1875rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  @media ${theme.device.phone} {
    width: 100%;
  }
`;
