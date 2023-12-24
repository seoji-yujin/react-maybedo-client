import React, { useCallback, useEffect, useState } from 'react';
import { Container, TodoListContainer, TitleWrapper } from './style';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { TodoInput, TodoListWrapper } from 'pages/Main/TodoList/style';
import { useParams } from 'react-router-dom';
import Memo from 'components/Memo';
import useRequest from 'hooks/useRequest';
import {
  createGroupNotice,
  deleteGroupNotice,
  updateGroupNotice,
} from 'apis/group';
import { toast } from 'react-toastify';
import useInput from 'hooks/useInput';
import { isEmpty } from 'lodash';

/**
 * 공지 사항 상세보기 팝업
 */
function NoticeDetail({ close }) {
  const { id: groupId } = useParams();
  const { data: noticeList, mutate } = useSWR(
    `/group/${groupId}/notices`,
    fetcher
  );
  const [inputNotice, onChangeInputNotice, setInputNotice] = useInput('');
  const [editId, setEditId] = useState(-1);
  const [isComposing, setIsComposing] = useState(false);

  const requestAddNotice = useRequest(createGroupNotice);
  const requestUpdateNotice = useRequest(updateGroupNotice);
  const addNotice = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key !== 'Enter') return;
      if (isEmpty(inputNotice.trim())) return;
      setInputNotice('');
      const newNotice = {
        content: inputNotice.trim(),
      };
      if (editId === -1) {
        requestAddNotice(groupId, newNotice)
          .then(() => {
            setInputNotice('');
            mutate();
          })
          .catch(() => {
            toast.error('공지를 추가하지 못하였습니다.');
          });
      } else {
        requestUpdateNotice(groupId, editId, newNotice)
          .then(() => {
            setInputNotice('');
            mutate();
            setEditId(-1);
          })
          .catch(() => {
            toast.error('공지를 수정하지 못하였습니다.');
          });
      }
    },
    [
      isComposing,
      inputNotice,
      setInputNotice,
      editId,
      requestAddNotice,
      mutate,
      requestUpdateNotice,
      groupId,
    ]
  );

  const requestDelNotice = useRequest(deleteGroupNotice);
  const deleteNoticeProc = useCallback(
    (id) => {
      requestDelNotice(groupId, id)
        .then(() => {
          mutate();
          if (editId >= 0) setInputNotice('');
        })
        .catch(() => {
          toast.error('공지를 삭제하지 못하였습니다.');
        });
    },
    [editId, groupId, mutate, requestDelNotice, setInputNotice]
  );

  useEffect(() => {
    if (editId === -1) return;
    const idx = noticeList.findIndex((m) => m.id === editId);
    if (idx < 0) return;
    setInputNotice(noticeList[idx].content);
  }, [editId, noticeList, setInputNotice]);

  if (noticeList === undefined) {
    return <TodoListWrapper />;
  }

  return (
    <Container>
      <TodoListContainer>
        <TitleWrapper>
          <div />
          NOTICE
          <span
            onClick={() => {
              close();
            }}
          >
            &times;
          </span>
        </TitleWrapper>
        <TodoListWrapper>
          {noticeList &&
            noticeList.map((notice, i) => (
              <Memo
                key={i}
                content={notice.content}
                deleteMemo={() => {
                  deleteNoticeProc(notice.id);
                }}
                onClickText={() => {
                  setEditId(notice.id);
                }}
              />
            ))}
        </TodoListWrapper>
        <TodoInput
          placeholder="공지를 입력하고 Enter키를 눌러주세요"
          value={inputNotice}
          onChange={onChangeInputNotice}
          onKeyDown={addNotice}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        />
      </TodoListContainer>
    </Container>
  );
}

export default NoticeDetail;
