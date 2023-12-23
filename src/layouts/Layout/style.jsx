import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 0.7rem 2rem;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: transparent;
  z-index: 999;
  color: var(--color-primary);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--color-border);
  gap: 0.5rem;
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

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  font-weight: 400;
`;

export const UserInfoBox = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
  > div {
    position: absolute;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    right: 2rem;
    top: 3.1rem;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 300;
    cursor: pointer !important;
    background-color: #fff;
  }
`;
