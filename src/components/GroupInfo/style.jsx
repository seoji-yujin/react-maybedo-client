import styled from '@emotion/styled';
import theme from 'styles/theme';

export const GroupImage = styled.div`
  background-color: #d0d0d0;
  width: 15rem;
  background: ${(props) =>
    props.src ? `url(${props.src});` : `url("/images/group_default.jpeg");`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media ${theme.device.phone} {
    width: 100%;
    height: 10rem;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  /* border-bottom: 1px solid var(--color-primary); */
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
  /* border: 1px solid var(--color-border); */
  background-color: white;
  /* border-radius: 10px; */
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
    transform: scale3d(1.01, 1.01, 1.01);
  }
  @media ${theme.device.phone} {
    flex-direction: column;
  }
`;

export const GroupInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  padding: 1rem;
  box-sizing: border-box;
`;

export const GroupName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
`;

export const MemberCountInfo = styled.div`
  align-self: flex-end;
  margin-top: 5px;
  font-size: 0.7rem;
  padding: 0.6rem;
`;

export const TagWrapper = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.4rem;
  color: var(--color-primary);
  > span {
    padding: 0.15rem 0.8rem;
    border-radius: 20px;
    background-color: #eeeeff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GroupDesc = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const GroupSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;
  font-size: 0.7rem;
  color: var(--color-textgray);
  > div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    > span {
      margin-top: 2px;
    }
  }
`;
