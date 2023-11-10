import React, { useCallback, useState } from 'react';
import {
  TodoListWrapper,
  Container,
  TodoInput,
  PreviousIcon,
} from '../../TodoList/style';
import { TitleWrapper } from './style';
import Todo from 'components/Todo';
import useInput from 'hooks/useInput';
import { isEmpty } from 'lodash';

function UserTodo({ close }) {
  // 임시
  const [todos, setTodos] = useState([
    { id: 0, done: false, content: '백준 ‘치킨 배달’ 문제 풀기' },
  ]);
  const [inputTodo, onChangeInputTodo, setInputTodo] = useInput('');
  const [isComposing, setIsComposing] = useState(false);

  const addTodos = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key !== 'Enter') return;
      if (isEmpty(inputTodo.trim())) return;
      setInputTodo('');
      const newTodo = { done: false, content: inputTodo.trim() };
      setTodos((prev) => [...prev, newTodo]);
    },
    [inputTodo, setInputTodo, isComposing]
  );

  const deleteTodo = useCallback(
    (idx) => {
      setTodos(todos.filter((_, i) => i !== idx));
    },
    [todos]
  );

  return (
    <Container onClick={close}>
      <TitleWrapper>
        <PreviousIcon />
        YUSUNG'S TODO
      </TitleWrapper>
      <TodoListWrapper>
        {todos.map((todo, i) => (
          <Todo
            key={i}
            content={todo.content}
            done={todo.done}
            deleteTodo={() => {
              deleteTodo(i);
            }}
          />
        ))}
      </TodoListWrapper>
      <TodoInput
        placeholder="할 일을 입력하고 Enter키를 눌러주세요"
        value={inputTodo}
        onChange={onChangeInputTodo}
        onKeyDown={addTodos}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
    </Container>
  );
}

export default UserTodo;
