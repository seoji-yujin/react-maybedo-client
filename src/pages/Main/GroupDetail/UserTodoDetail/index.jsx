import React from 'react';
import { TodoListWrapper, Container, PreviousIcon } from '../../TodoList/style';
import { TitleWrapper } from './style';
import Todo from 'components/Todo';

function UserTodo({ close, user }) {
  return (
    <Container>
      <TitleWrapper onClick={close}>
        <PreviousIcon />
        {user.username}'S TODO
      </TitleWrapper>
      <TodoListWrapper>
        {user.todo_list.map((todo, i) => (
          <Todo key={i} content={todo.content} done={todo.status === 'DONE'} />
        ))}
      </TodoListWrapper>
    </Container>
  );
}

export default UserTodo;
