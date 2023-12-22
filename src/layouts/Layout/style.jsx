import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
  color: var(--color-primary);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--color-border);
  grid-area: header;
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const HeaderButton = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;
