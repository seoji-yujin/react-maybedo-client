import styled from '@emotion/styled';
import { FaDeleteLeft } from 'react-icons/fa6';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TodoText = styled.div`
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 500;
  flex-grow: 1;
  color: var(--color-primary);
  ${(props) => props.done && 'text-decoration: line-through'};
  ${(props) => props.done && 'color: var(--color-disabled)'};
`;

export const DeleteButton = styled(FaDeleteLeft)`
  cursor: pointer;
  color: var(--color-disabled);
`;
