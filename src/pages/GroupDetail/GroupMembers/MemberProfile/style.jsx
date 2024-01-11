import styled from '@emotion/styled';

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
