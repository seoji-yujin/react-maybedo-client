import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 45rem;
  margin-top: 3rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const TitleDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  color: var(--color-primary);
  cursor: pointer;
`;

export const GroupImage = styled.div`
  background-color: #d0d0d0;
  width: 15rem;
  height: 100%;
  background: url('https://bit.ly/3e22Imq');
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media ${theme.device.phone} {
    width: 100%;
    height: 10rem;
  }
`;

export const GroupProfileWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  min-height: 10rem;
  /* border-bottom: 1px solid var(--color-primary); */
  /* box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1); */
  /* border-radius: 10px; */
  box-sizing: border-box;
  @media ${theme.device.phone} {
    flex-direction: column;
  }
`;

export const GroupInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  > :first-of-type {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid var(--color-disabled);
  margin-top: 2.5rem;
`;

export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  font-weight: ${(props) => (props.selected ? '700' : '400')};
  color: ${(props) =>
    props.selected ? 'var(--color-primary)' : 'var(--color-disabled)'};
  ${(props) => props.selected && 'border-top: 3px solid var(--color-primary);'};
  cursor: pointer;
  padding: 7px;
  margin-top: -2px;
`;
