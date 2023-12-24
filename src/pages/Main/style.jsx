import styled from '@emotion/styled';

export const MenuWrapper = styled.div`
  display: flex;
  gap: 2rem !important;
  justify-content: center;
  margin: 2rem 0 1rem 0;
`;

export const MenuDiv = styled.div`
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;
  color: var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: 50%;
  font-weight: 400;
  border: 1px solid var(--color-primary);
  ${(props) => props.selected && ' background-color: var(--color-primary);'}
  ${(props) => props.selected && 'color: #fff'}
`;
