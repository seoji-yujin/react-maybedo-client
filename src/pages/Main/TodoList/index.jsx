import React, { useCallback, useState } from 'react';
import {
  TodayWrapper,
  TodoListWrapper,
  Container,
  TodoInput,
  PreviousIcon,
  NextIcon,
  CornerDiv,
  MemoTitle,
} from './style';
import dayjs from 'dayjs';
import Todo from 'components/Todo';
import useInput from 'hooks/useInput';
import { isEmpty } from 'lodash';
import MemoList from './MemoList';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import useRequest from 'hooks/useRequest';
import { createTodo, toggleTodo, deleteTodo } from 'apis/todo';
import { toast } from 'react-toastify';

const TODO = 'todo';
const MEMO = 'memo';

function TodoList() {
  const [inputTodo, onChangeInputTodo, setInputTodo] = useInput('');
  const [today, setToday] = useState(dayjs());
  const [isComposing, setIsComposing] = useState(false);
  const [mode, setMode] = useState(TODO);
  const { data: todos, mutate } = useSWR(
    `todo/get/${dayjs(today).format('YYYY-MM-DD')}`,
    fetcher
  );
  // const [hover, setHover] = useState(false);

  const requestAddTodo = useRequest(createTodo);
  const addTodos = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key !== 'Enter') return;
      if (isEmpty(inputTodo.trim())) return;
      setInputTodo('');
      const newTodo = {
        content: inputTodo.trim(),
        date: dayjs(today).format('YYYY-MM-DD'),
      };
      requestAddTodo(newTodo)
        .then(() => {
          mutate();
        })
        .catch(() => {
          toast.error('투두를 추가하지 못하였습니다.');
        });
    },
    [isComposing, inputTodo, setInputTodo, today, requestAddTodo, mutate]
  );

  const requestDelTodo = useRequest(deleteTodo);
  const deleteTodoProc = useCallback(
    (id) => {
      requestDelTodo(id)
        .then(() => {
          mutate();
        })
        .catch(() => {
          toast.error('투두를 삭제하지 못하였습니다.');
        });
    },
    [mutate, requestDelTodo]
  );

  const requsetDoneTodo = useRequest(toggleTodo);
  const doneTodo = useCallback(
    (id) => {
      requsetDoneTodo(id)
        .then(() => {
          mutate();
        })
        .catch(() => {
          toast.error('투두를 완료하지 못하였습니다.');
        });
    },
    [mutate, requsetDoneTodo]
  );

  if (todos === undefined) {
    return (
      <Container>
        <TodayWrapper>
          <PreviousIcon />
          <div>
            {today.format('MMMM DD[th] - ')}
            {today.format('dddd').toUpperCase()}
          </div>
          <NextIcon />
        </TodayWrapper>
        <TodoListWrapper />
        <TodoInput placeholder="할 일을 입력하고 Enter키를 눌러주세요" />
      </Container>
    );
  }

  return (
    <Container
    // onMouseEnter={() => {
    //   setHover(true);
    // }}
    // onMouseLeave={() => {
    //   setHover(false);
    // }}
    >
      <TodayWrapper>
        {mode === MEMO ? (
          <MemoTitle>
            <div>MEMO</div>
          </MemoTitle>
        ) : (
          <>
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
          </>
        )}
      </TodayWrapper>
      {mode === TODO && (
        <>
          <TodoListWrapper>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                doneTodo={() => {
                  doneTodo(todo.id);
                }}
                content={todo.content}
                done={todo.status === 'DONE'}
                deleteTodo={() => {
                  deleteTodoProc(todo.id);
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
        </>
      )}
      {mode === MEMO && <MemoList />}
      <CornerDiv
        onClick={() => {
          setMode((prev) => (prev === TODO ? MEMO : TODO));
        }}
      />
    </Container>
  );
}

export default TodoList;
