import styled from '@emotion/styled';

export const Header = styled.div`
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fbfbfd;
  z-index: 999;
  /* border-bottom: 1px solid #d9d9d9; */
  > div {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;
