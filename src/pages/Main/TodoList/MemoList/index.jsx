import React, { useCallback, useEffect, useState } from 'react';
import useInput from 'hooks/useInput';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import useRequest from 'hooks/useRequest';
import { isEmpty } from 'lodash';
import { TodoListWrapper, TodoInput } from '../style';
import Memo from 'components/Memo';
import { createMemo, deleteMemo, updateMemo } from 'apis/maybedo';
import { toast } from 'react-toastify';

function MemoList() {
  const [inputMemo, onChangeInputMemo, setInputMemo] = useInput('');
  const [editId, setEditId] = useState(-1);
  const [isComposing, setIsComposing] = useState(false);
  const { data: memos, mutate } = useSWR(`maybedo`, fetcher);

  const requestAddMemo = useRequest(createMemo);
  const requestUpdateMemo = useRequest(updateMemo);
  const addMemo = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key !== 'Enter') return;
      if (isEmpty(inputMemo.trim())) return;
      setInputMemo('');
      const newTodo = {
        content: inputMemo.trim(),
      };
      if (editId === -1) {
        requestAddMemo(newTodo)
          .then(() => {
            setInputMemo('');
            mutate();
          })
          .catch(() => {
            toast.error('메모를 추가하지 못하였습니다.');
          });
      } else {
        requestUpdateMemo({ id: editId, params: newTodo })
          .then(() => {
            setInputMemo('');
            mutate();
            setEditId(-1);
          })
          .catch(() => {
            toast.error('메모를 수정하지 못하였습니다.');
          });
      }
    },
    [
      isComposing,
      inputMemo,
      setInputMemo,
      editId,
      mutate,
      requestAddMemo,
      requestUpdateMemo,
    ]
  );

  const requestDelMemo = useRequest(deleteMemo);
  const deleteMemoProc = useCallback(
    (id) => {
      requestDelMemo(id)
        .then(() => {
          mutate();
          if (editId >= 0) setInputMemo('');
        })
        .catch(() => {
          toast.error('메모를 수정하지 못하였습니다.');
        });
    },
    [editId, mutate, requestDelMemo, setInputMemo]
  );

  useEffect(() => {
    if (editId === -1) return;
    const idx = memos.findIndex((m) => m.id === editId);
    if (idx < 0) return;
    setInputMemo(memos[idx].content);
  }, [editId, memos, setInputMemo]);

  if (memos === undefined) {
    return <TodoListWrapper />;
  }

  return (
    <>
      <TodoListWrapper>
        {memos.map((memo) => (
          <Memo
            key={memo.id}
            content={memo.content}
            deleteMemo={() => {
              deleteMemoProc(memo.id);
            }}
            onClickText={() => {
              setEditId(memo.id);
            }}
          />
        ))}
      </TodoListWrapper>
      <TodoInput
        placeholder="메모를 입력하고 Enter키를 눌러주세요"
        value={inputMemo}
        onChange={onChangeInputMemo}
        onKeyDown={addMemo}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
    </>
  );
}

export default MemoList;
