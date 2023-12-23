import React from 'react';
import { TodoListWrapper } from '../../TodoList/style';
import {
  // ProgressWrapper,
  Container,
  TodoListContainer,
  TitleWrapper,
} from './style';
import Todo from 'components/Todo';
import dayjs from 'dayjs';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

function UserTodo({ close, user }) {
  // const [rate, setRate] = useState(0);
  const { data: todoList } = useSWR(
    `/todo/${user.username}/${dayjs().format('YYYY-MM-DD')}`,
    fetcher
  );
  // useEffect(() => {
  //   if (!todoList) {
  //     setRate(0);
  //     return;
  //   }
  //   const totalCnt = todoList.length;
  //   const doneCnt = todoList.filter((todo) => todo.status === 'DONE').length;
  //   setRate(totalCnt === 0 ? 0 : Math.floor((doneCnt / totalCnt) * 100));
  // }, [todoList]);

  return (
    <Container>
      <TodoListContainer>
        <TitleWrapper>
          <div />
          {user.name}'s TODO
          <span
            onClick={() => {
              close();
            }}
          >
            &times;
          </span>
        </TitleWrapper>
        <TodoListWrapper>
          {/* <ProgressWrapper>
            <progress value={rate} max={100} />
            <div>{rate}%</div>
          </ProgressWrapper> */}
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
