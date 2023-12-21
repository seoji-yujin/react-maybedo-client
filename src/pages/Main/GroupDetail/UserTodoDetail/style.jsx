import styled from '@emotion/styled';
import theme from 'styles/theme';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  border-radius: 6px;
  user-select: none;
  z-index: 1012;
  position: absolute;
  @media ${theme.device.phone} {
    width: 100%;
  }
`;

export const TodoListContainer = styled.div`
  width: 29.25rem;
  max-width: 90%;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media ${theme.device.tablet}, ${theme.device.phone} {
    margin-top: 1rem;
  }
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.5);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  height: 60vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  > progress {
    height: 8px;
    appearance: none;
    ::-webkit-progress-bar {
      background-color: #c9c9d7;
      border-radius: 10px;
    }
    ::-webkit-progress-value {
      background-color: var(--color-primary);
      border-radius: 10px;
    }
  }
  > div {
    font-size: 0.9rem;
    color: var(--color-primary);
  }
`;
