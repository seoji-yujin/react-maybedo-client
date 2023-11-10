import React, { useCallback, useEffect, useState } from 'react';
import useInput from 'hooks/useInput';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import useRequest from 'hooks/useRequest';
import { isEmpty } from 'lodash';
import { TodoListWrapper, TodoInput } from '../style';
import Memo from 'components/Memo';
import { createMemo, deleteMemo, updateMemo } from 'apis/maybedo';

function MemoList() {
  const [inputMemo, onChangeInputMemo, setInputMemo] = useInput('');
  const [editId, setEditId] = useState(-1);
  const [isComposing, setIsComposing] = useState(false);
  const { data: memos, mutate } = useSWR(`maybedo`, fetcher);

  const requestAddMemo = useRequest(createMemo);
  const requestUpdateMemo = useRequest(updateMemo);
  const addMemo = useCallback(
    async (e) => {
      if (isComposing) return;
      if (e.key !== 'Enter') return;
      if (isEmpty(inputMemo.trim())) return;
      setInputMemo('');
      const newTodo = {
        content: inputMemo.trim(),
      };
      if (editId === -1) {
        await requestAddMemo(newTodo).catch((e) => {
          console.error(e);
        });
      } else {
        await requestUpdateMemo({ id: editId, params: newTodo }).catch((e) => {
          console.error(e);
        });
        setEditId(-1);
      }
      setInputMemo('');
      mutate();
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
    async (id) => {
      await requestDelMemo(id).catch((e) => {
        console.error(e);
      });
      mutate();
      if (editId >= 0) setInputMemo('');
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
