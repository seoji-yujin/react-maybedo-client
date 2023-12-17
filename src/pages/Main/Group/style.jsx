import styled from '@emotion/styled';
import { MainContainer } from 'layouts/MainContainer';
import theme from 'styles/theme';

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

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0.7rem;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;
  & input {
    width: 100%;
    padding: 0.7rem 1rem;
    color: var(--color-primary);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
    background-color: white;
    border: none;
    font-size: 0.9rem;
    border-radius: 50px;
    &::placeholder {
      color: var(--color-disabled);
    }
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
  overflow: auto;
  justify-content: space-between;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  /* background-color: white; */
  > :last-child {
    border-bottom: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    /* backdrop-filter: blur(10px); */
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
  }
`;

export const GroupImage = styled.div`
  background-color: #d0d0d0;
  width: 10rem;
  height: 100%;
  background: url('https://bit.ly/3e22Imq');
  background-position: center;
  background-repeat: no-repeat;
`;

export const GroupWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  /* border-bottom: 1px solid var(--color-primary); */
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  /* border-radius: 10px; */
  cursor: pointer;
  :hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
    transform: scale3d(1.01, 1.01, 1.01);
  }
  @media ${theme.device.phone} {
    width: 100%;
  }
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.8rem;
  padding: 1rem;
`;

export const GroupName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const MemberCountInfo = styled.div`
  align-self: flex-end;
  margin-top: 5px;
  font-size: 0.7rem;
  padding: 0.6rem;
`;

export const TagWrapper = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.4rem;
  > span {
    padding: 0.15rem 0.8rem;
    border-radius: 20px;
    background-color: #eeeeff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AddGroupButton = styled(GroupWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
  color: var(--color-primary);
  :hover {
    transform: scale3d(1, 1, 1);
  }
`;

export const GroupDesc = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
`;
