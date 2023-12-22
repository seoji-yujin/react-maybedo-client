import styled from '@emotion/styled';
import { MainContainer } from 'layouts/MainContainer';

export const Container = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  overflow: scroll;
  height: auto;
  padding-bottom: 5rem;
`;

export const TitleDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  cursor: pointer;
`;

export const ProfileInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  > input {
    display: none;
  }
`;

export const ProfileInputButton = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #c6c6c6;
  bottom: -5px;
  right: 0;
  cursor: pointer;
`;

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  display: inline-flex;
  padding: 1rem;
  justify-content: center;
  font-size: 0.875rem;
  align-items: center;
  border: none;
  border-radius: 0.1875rem;
  font-weight: 500;
  cursor: pointer;
  background-color: var(--color-primary);
  color: #fff;
  margin-top: 2rem;
`;

export const NameTagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 80%;
`;

export const NameTagDiv = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  background: #e8e8ff;
  color: var(--color-primary);
  display: flex;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  gap: 0.5rem;
  > div {
    cursor: pointer;
    font-size: 0.8rem;
  }
`;

export const ScheduleTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ErrorMsg = styled.div`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export const ProfileImage = styled.div`
  ${(props) => props.width && `width: ${props.width}rem`};
  ${(props) => props.height && `height: ${props.height}rem`};
  border-radius: 10px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c9c9d7;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.cursor && `cursor:${props.cursor};`}
`;
