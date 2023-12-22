import Modal from 'layouts/Modal';
import React from 'react';
import { GroupInfoDiv, ButtonWrapper, ButtonDiv } from './style';

function DeleteConfirmPopup({ show, onClose, groupName, confirmCallback }) {
  return (
    <Modal show={show} onCloseModal={onClose}>
      <GroupInfoDiv>
        <div>[{groupName}]</div>그룹에서 탈퇴하시겠습니까?
      </GroupInfoDiv>
      <ButtonWrapper>
        <ButtonDiv onClick={confirmCallback} primary>
          확인
        </ButtonDiv>
        <ButtonDiv onClick={onClose}>취소</ButtonDiv>
      </ButtonWrapper>
    </Modal>
  );
}

export default DeleteConfirmPopup;
