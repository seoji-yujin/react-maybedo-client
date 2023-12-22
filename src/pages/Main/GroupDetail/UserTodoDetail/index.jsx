import React, { useEffect, useState } from 'react';
import {
  TodoListWrapper,
  PreviousIcon,
  NextIcon,
  TodayWrapper,
} from '../../TodoList/style';
import {
  TitleWrapper,
  ProgressWrapper,
  Container,
  TodoListContainer,
} from './style';
import Todo from 'components/Todo';
import dayjs from 'dayjs';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

function UserTodo({ close, user }) {
  const [today, setToday] = useState(dayjs());
  const [rate, setRate] = useState(0);
  const { data: todoList } = useSWR(
    `/todo/${user.username}/${today.format('YYYY-MM-DD')}`,
    fetcher
  );
  useEffect(() => {
    if (!todoList) {
      setRate(0);
      return;
    }
    const totalCnt = todoList.length;
    const doneCnt = todoList.filter((todo) => todo.status === 'DONE').length;
    setRate(totalCnt === 0 ? 0 : Math.floor((doneCnt / totalCnt) * 100));
  }, [todoList]);

  return (
    <Container>
      <TodoListContainer>
        <TodayWrapper>
          <PreviousIcon
            onClick={() => {
              setToday((prev) => prev.subtract(1, 'd'));
            }}
          />
          <div
            onClick={() => {
              setToday(dayjs());
            }}
          >
            {today.format('MMMM DD[th] - ')}
            {today.format('dddd').toUpperCase()}
          </div>
          <NextIcon
            onClick={() => {
              setToday((prev) => prev.add(1, 'd'));
            }}
          />
        </TodayWrapper>
        <TodoListWrapper>
          <TitleWrapper>{user.name}'S TODO</TitleWrapper>
          <ProgressWrapper>
            <progress value={rate} max={100} />
            <div>{rate}%</div>
          </ProgressWrapper>
          {todoList &&
            todoList.map((todo, i) => (
              <Todo
                key={i}
                content={todo.content}
                done={todo.status === 'DONE'}
              />
            ))}
        </TodoListWrapper>
      </TodoListContainer>
    </Container>
  );
}

export default UserTodo;
