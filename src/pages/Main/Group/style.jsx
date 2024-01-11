import styled from '@emotion/styled';
import { GroupWrapper } from 'components/GroupInfo/style';
import { MainContainer } from 'layouts/MainContainer';

export const Container = styled(MainContainer)`
  /* border: 2px solid var(--color-primary); */
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 80vh;
  width: 45rem;
  /* background-color: #fefefe; */
  /* box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2); */
`;

export const HeaderWrapper = styled.div`
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  box-sizing: border-box;
  color: var(--color-primary);
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const AnotherGroupButton = styled.div`
  font-size: 0.8rem;
  margin-right: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const GroupListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  row-gap: 1.5rem;
  justify-content: space-between;
  /* background-color: white; */
`;

export const SearchButton = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;
`;

export const AddGroupButton = styled(GroupWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 0;
  color: #525252;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid var(--color-border);
  box-shadow: none;
  margin-bottom: 2rem;
  :hover {
    transform: none;
    box-shadow: none;
  }
`;

export const TotalGroupDiv = styled.div`
  color: #777777;
  font-weight: 500;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;
