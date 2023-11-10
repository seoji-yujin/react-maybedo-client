import React, { useState } from 'react';
import { Container, TodoText, DeleteButton } from './style';

function Memo({ content, deleteMemo, onClickText }) {
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
      <TodoText onClick={onClickText}>{content}</TodoText>
      {hovering && (
        <DeleteButton
          onClick={(e) => {
            e.preventDefault();
            deleteMemo();
          }}
          size="18"
        />
      )}
    </Container>
  );
}

export default Memo;
