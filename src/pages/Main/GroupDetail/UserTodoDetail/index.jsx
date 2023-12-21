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

function UserTodo({ close, user }) {
  const [today, setToday] = useState(dayjs());
  const [rate, setRate] = useState(0);
  useEffect(() => {
    if (!user) return 0;
    const totalCnt = user.todoList.length;
    const doneCnt = user.todoList.filter(
      (todo) => todo.status === 'DONE'
    ).length;
    setRate(totalCnt === 0 ? 0 : Math.floor((doneCnt / totalCnt) * 100));
  }, [user]);

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
          {user.todoList.map((todo, i) => (
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
