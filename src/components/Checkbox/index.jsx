import React from 'react';
import { CheckBoxDiv } from './style';
import { BsCheckLg } from 'react-icons/bs';

function Checkbox({ checked, onClickHandler }) {
  return (
    <CheckBoxDiv checked={checked} onClick={onClickHandler}>
      <div>
        <BsCheckLg size="14" />
      </div>
    </CheckBoxDiv>
  );
}

export default Checkbox;
