import styled from '@emotion/styled';

export const CheckBoxDiv = styled.div`
  width: 1rem;
  height: 1rem;
  /* border: 1px solid var(--color-primary); */
  background-color: #c9c9d7;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  & div {
    opacity: ${(props) => (props.checked ? '1' : '0')};
    display: flex;
    align-items: center;
    color: white;
    background-color: var(--color-primary);
    transition: all 0.2s ease-in-out;
    width: 1rem;
    height: 1rem;
  }
`;
