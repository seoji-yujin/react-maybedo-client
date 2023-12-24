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

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  margin-right: 1rem;
  & img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;

export const UserName = styled.div`
  font-size: 1rem !important;
  color: var(--color-primary);
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const MemberTitle = styled.div`
  font-size: 1.1rem;
  color: var(--color-primary);
`;

export const MemberInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: -7px;
  > progress {
    height: 8px;
    width: 100%;
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
    width: 5rem;
    font-size: 0.9rem;
    color: var(--color-primary);
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
