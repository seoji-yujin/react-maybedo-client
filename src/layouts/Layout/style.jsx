import styled from '@emotion/styled';

export const Header = styled.div`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const HeaderButton = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;
