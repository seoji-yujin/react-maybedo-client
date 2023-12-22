import styled from '@emotion/styled';
import { MainContainer } from 'layouts/MainContainer';

export const Container = styled(MainContainer)`
  /* border: 2px solid var(--color-primary); */
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 80vh;
  width: 45rem;
  margin-top: 2rem;
  /* background-color: #fefefe; */
  /* box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2); */
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0.7rem;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;
  position: relative;
  > div {
    position: absolute;
    left: 30px;
    font-weight: 600;
  }
  & input {
    width: 100%;
    padding: 0.7rem 1rem 0.7rem 2rem;
    background-color: white;
    /* box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
    border: none; */
    border: 1px solid var(--color-border);
    font-size: 0.9rem;
    border-radius: 50px;
  }
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
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 80%;
  padding: 0 1rem;
`;

export const TagDiv = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  background: #e8e8ff;
  color: var(--color-primary);
  display: flex;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  gap: 0.5rem;
  > div {
    cursor: pointer;
    font-size: 0.8rem;
  }
`;
