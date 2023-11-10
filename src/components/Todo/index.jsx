import React, { useState } from 'react';
import { Container, TodoText, DeleteButton } from './style';
import Checkbox from 'components/Checkbox';

function Todo({ done, content, deleteTodo, doneTodo }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <Checkbox checked={done} onClickHandler={doneTodo} />
      <TodoText onClick={doneTodo} done={done}>
        {content}
      </TodoText>
      {hovering && <DeleteButton onClick={deleteTodo} size="18" />}
    </Container>
  );
}

export default Todo;
