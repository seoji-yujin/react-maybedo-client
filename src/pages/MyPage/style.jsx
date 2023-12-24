import styled from '@emotion/styled';

export const Container = styled.div`
  width: 45rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const TitleDiv = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const HeaderButton = styled.div`
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const ContentDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background-color: #fff;
  padding: 1.5rem 1rem;
`;

export const UserProfileInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  gap: 1rem;
  color: var(--color-primary);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
`;

export const UserDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;
  > div {
    display: flex;
    gap: 1.5rem;
    font-weight: 600;
    color: var(--color-primary);
    > span {
      font-weight: 300;
      color: #000;
    }
  }
`;

export const FormItem = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  position: relative;
  align-items: center;
  ${(props) => props.flexDirection && `flex-direction:${props.flexDirection};`}
  > div {
    font-weight: 600;
    color: var(--color-primary);
  }
  > input {
    flex-grow: 1;
    background-color: #fff;
    border: solid 1px
      ${(props) => (props.isError ? '#f33535' : 'var(--color-disabled)')};
    border-radius: 0.2rem;
    padding: 0.81rem 0.94rem;
    color: var(--color-primary);
    font-size: 0.9rem;
    &::placeholder {
      color: var(--color-disabled);
      font-size: 0.875rem;
    }
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
