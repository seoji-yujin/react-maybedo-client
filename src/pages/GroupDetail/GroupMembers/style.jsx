import styled from '@emotion/styled';

export const MemberWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const MemberDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.1rem;
  padding: 1rem 0.1rem;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid var(--color-border);
  :first-of-type {
    border-top: none;
  }
`;

export const TitleDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  display: flex;
  gap: 0.7rem;
  align-items: end;
  margin-bottom: 1rem;
`;
