import styled from '@emotion/styled';
import { MainContainer } from 'layouts/MainContainer';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const Container = styled(MainContainer)`
  /* border: 2px solid var(--color-primary); */
  display: flex;
  flex-direction: column;
  /* background-color: #fefefe; */
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
`;

export const CornerDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60px;
  height: auto;
  aspect-ratio: 1 / 1;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    #fff 50%,
    #fff 100%
  );
  cursor: pointer;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

export const TodayWrapper = styled.div`
  border-bottom: 1px solid var(--color-disabled);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.9rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: white;
  > div {
    cursor: pointer;
  }
`;

export const TodoListWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const TodoInput = styled.input`
  width: 100%;
  padding: 2rem 4rem 2rem 2rem;
  border: none;
  box-sizing: border-box;
  color: var(--color-primary);
  ::placeholder {
    color: var(--color-disabled);
  }
`;

export const PreviousIcon = styled(MdOutlineArrowBackIos)`
  cursor: pointer;
  color: var(--color-primary);
`;

export const NextIcon = styled(MdOutlineArrowForwardIos)`
  cursor: pointer;
  color: var(--color-primary);
`;

export const MemoTitle = styled.div`
  text-align: center;
  width: 100%;
  cursor: default !important;
`;
