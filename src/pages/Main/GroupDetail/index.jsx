import React, { useState } from 'react';
import {
  Container,
  TitleDiv,
  TodayWrapper,
  MemberWrapper,
  MemberDiv,
  TodoWrapper,
  ProfileWrapper,
  UserName,
  MemberDetailWrapper,
  DetailUserName,
  DetailContent,
  MoreDetailButton,
  Content,
} from './style';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import UserTodo from './UserTodoDetail';

function GroupDetail() {
  // 임시
  const users = [
    { id: 0, name: 'YUSUNG' },
    { id: 1, name: 'YUSUNG' },
    { id: 2, name: 'YUSUNG' },
    { id: 3, name: 'YUSUNG' },
    { id: 4, name: 'YUSUNG' },
    { id: 5, name: 'YUSUNG' },
    { id: 6, name: 'YUSUNG' },
    { id: 7, name: 'YUSUNG' },
    { id: 8, name: 'YUSUNG' },
    { id: 9, name: 'YUSUNG' },
    { id: 10, name: 'YUSUNG' },
    { id: 11, name: 'YUSUNG' },
    { id: 12, name: 'YUSUNG' },
  ];
  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState(users[0]);
  const [showDetail, setShowDetail] = useState(false);

  if (showDetail)
    return (
      <UserTodo
        close={() => {
          setShowDetail(false);
        }}
      />
    );

  return (
    <Container>
      <TitleDiv
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoChevronBack />
        얼리버드들 (2/5)
      </TitleDiv>
      <Content>
        <TodayWrapper>
          {dayjs().format('MMMM DD[th] - ')}
          {dayjs().format('dddd').toUpperCase()}
        </TodayWrapper>
        <TodoWrapper>
          <div>백준 매일 1문제 이상 풀기</div>
          <div>백준 매일 1문제 이상 풀기</div>
          <div>백준 매일 1문제 이상 풀기</div>
          <div>백준 매일 1문제 이상 풀기</div>
        </TodoWrapper>
        <MemberWrapper>
          {users.map((user) => (
            <MemberDiv
              key={user.id}
              onClick={() => {
                setSelectUser(user);
              }}
            >
              <CircularProgressbarWithChildren
                styles={{
                  root: {
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                  },
                  path: {
                    stroke:
                      selectUser.id === user.id
                        ? 'var(--color-primary)'
                        : 'var(--color-disabled)',
                    strokeWidth: '5px',
                  },
                }}
                value={66}
              >
                <ProfileWrapper>
                  <img
                    src="https://fastly.picsum.photos/id/278/600/600.jpg?hmac=3oGo6rQo42jgkjtw1Yiow2k8Jpuf-skpQCG9-lCTVyo"
                    alt="img"
                  />
                </ProfileWrapper>
              </CircularProgressbarWithChildren>
              <UserName selected={selectUser.id === user.id}>
                {user.name}
              </UserName>
            </MemberDiv>
          ))}
        </MemberWrapper>
        <MemberDetailWrapper>
          <DetailUserName>{selectUser.name}</DetailUserName>
          <DetailContent>
            <div>
              오늘의 목표 달성률 <b>66%</b>
            </div>
            <MoreDetailButton
              onClick={() => {
                setShowDetail(true);
              }}
            >
              자세히 보기 {'>'}
            </MoreDetailButton>
          </DetailContent>
        </MemberDetailWrapper>
      </Content>
    </Container>
  );
}

export default GroupDetail;
