import { joinGroup } from 'apis/group';
import useRequest from 'hooks/useRequest';
import Modal from 'layouts/Modal';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GroupInfoDiv, ButtonWrapper, ButtonDiv } from './style';

function JoinGroupPopup({ show, onClose, group }) {
  const navigate = useNavigate();
  const requestJoin = useRequest(joinGroup);
  const onClickJoinButton = useCallback(async () => {
    if (!group) return;
    const result = await requestJoin(group.id).catch((e) => {
      toast.error('그룹 가입에 실패하였습니다.');
    });
    if (result === 'Already Join') {
      toast.error('이미 가입된 그룹입니다.');
      onClose();
    } else if (result === 'Over Limit') {
      toast.error('그룹 정원이 가득찼습니다.');
      onClose();
    } else if (result === 1) {
      toast.success('그룹에 가입하였습니다.');
      navigate(`/group/${group.id}`);
    }
  }, [group, navigate, onClose, requestJoin]);

  return (
    <Modal show={show} onCloseModal={onClose}>
      <GroupInfoDiv>
        <div>[{group?.name}]</div> 그룹에 가입하시겠습니까?
      </GroupInfoDiv>
      <ButtonWrapper>
        <ButtonDiv onClick={onClickJoinButton} primary>
          가입
        </ButtonDiv>
      </ButtonWrapper>
    </Modal>
  );
}

export default JoinGroupPopup;
