import React, { useCallback, useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import UserTodo from './UserTodoDetail';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { isEmpty } from 'lodash';

function GroupDetail() {
  const { id } = useParams();
  const { data: groupInfo } = useSWR(`/group/${id}`, fetcher);
  const { data: memberInfo } = useSWR(`/group/members/${id}`, fetcher);

  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const getRate = useCallback((user) => {
    if (!user) return 0;
    const totalCnt = user.todoList.length;
    const doneCnt = user.todoList.filter(
      (todo) => todo.status === 'DONE'
    ).length;
    return totalCnt === 0 ? 0 : Math.floor((doneCnt / totalCnt) * 100);
  }, []);

  useEffect(() => {
    if (!memberInfo || isEmpty(memberInfo)) return;
    setSelectUser(memberInfo[0]);
  }, [memberInfo]);

  if (!groupInfo || !memberInfo) {
    return null;
  }

  if (showDetail && selectUser)
    return (
      <UserTodo
        close={() => {
          setShowDetail(false);
        }}
        user={selectUser}
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
        {groupInfo.name} ({groupInfo.joinList.length}/{groupInfo.limitMember})
      </TitleDiv>
      <Content>
        <TodayWrapper>
          {dayjs().format('MMMM DD[th] - ')}
          {dayjs().format('dddd').toUpperCase()}
        </TodayWrapper>
        <TodoWrapper>
          <div>백준 매일 1문제 이상 풀기</div>
          <div>백준 매일 1문제 이상 풀기</div>
        </TodoWrapper>
        <MemberWrapper>
          {memberInfo.map((member) => (
            <MemberDiv
              key={member.id}
              onClick={() => {
                setSelectUser(member);
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
                      selectUser?.id === member.id
                        ? 'var(--color-primary)'
                        : 'var(--color-disabled)',
                    strokeWidth: '5px',
                  },
                }}
                value={getRate(selectUser)}
              >
                <ProfileWrapper>
                  <img
                    src="https://fastly.picsum.photos/id/278/600/600.jpg?hmac=3oGo6rQo42jgkjtw1Yiow2k8Jpuf-skpQCG9-lCTVyo"
                    alt="img"
                  />
                </ProfileWrapper>
              </CircularProgressbarWithChildren>
              <UserName selected={selectUser?.id === member.id}>
                {member.name}
              </UserName>
            </MemberDiv>
          ))}
        </MemberWrapper>
        {selectUser && (
          <MemberDetailWrapper>
            <DetailUserName>{selectUser.name}</DetailUserName>
            <DetailContent>
              <div>
                오늘의 목표 달성률 <b>{getRate(selectUser)}%</b>
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
        )}
      </Content>
    </Container>
  );
}

export default GroupDetail;
