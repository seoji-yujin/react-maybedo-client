import styled from '@emotion/styled';

export const MemoWrapper = styled.div`
  padding: 2rem;
  height: 100%;
  background-color: white;
  overflow: auto;
  white-space: pre-line;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const MemoTextArea = styled.textarea`
  padding: 2rem;
  height: 100%;
  color: var(--color-primary);
  line-height: 1.5;
  border: none;
  resize: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const DoneButton = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  position: absolute;
  top: 5.2rem;
  right: 1rem;
`;
