import React from 'react';
import { TodoListWrapper, Container, PreviousIcon } from '../../TodoList/style';
import { TitleWrapper } from './style';
import Todo from 'components/Todo';

function UserTodo({ close, user }) {
  return (
    <Container>
      <TitleWrapper onClick={close}>
        <PreviousIcon />
        {user.name}'S TODO
      </TitleWrapper>
      <TodoListWrapper>
        {user.todoList.map((todo, i) => (
          <Todo key={i} content={todo.content} done={todo.status === 'DONE'} />
        ))}
      </TodoListWrapper>
    </Container>
  );
}

export default UserTodo;
