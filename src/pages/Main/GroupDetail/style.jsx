import styled from '@emotion/styled';
import { MainContainer } from 'layouts/MainContainer';

export const Container = styled(MainContainer)`
  /* width: 39.25rem; */
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const TitleDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--color-disabled);
`;

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2); */
  border: 1px solid var(--color-disabled);
  gap: 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem 2rem;
  max-height: 30%;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const TodayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0 1rem;
  margin-top: 0.5rem;
`;

export const MemberWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  padding: 1rem 0;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const MemberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  width: '30%';
  cursor: pointer;
  > div {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const ProfileWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const UserName = styled.div`
  font-size: 0.75rem !important;
  color: ${(props) =>
    props.selected ? 'var(--color-primary)' : 'var(--color-disabled)'};
  font-weight: ${(props) => (props.selected ? '800' : '600')}!important;
`;

export const MemberDetailWrapper = styled.div`
  max-height: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 1rem 1rem;
`;

export const DetailUserName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const MoreDetailButton = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
`;
