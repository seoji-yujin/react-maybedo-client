import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20rem;
  max-width: 90%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  height: auto;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoDiv = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  > input {
    border: none;
    border-bottom: 1px solid var(--color-primary);
    color: var(--color-primary);
    width: 100%;
    background-color: transparent;
    padding: 0.5rem;
    ::placeholder {
      color: var(--color-disabled);
    }
  }
  > button {
    margin-top: 1rem;
    color: white;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    padding: 0.5rem 2rem;
    border-radius: 5rem;
    width: 100%;
    box-sizing: border-box;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;
