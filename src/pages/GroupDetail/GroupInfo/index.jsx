import React, { useState } from 'react';
import { TitleDiv, ContentDiv, NoContent, EditButton } from './style';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { isEmpty } from 'lodash';
import { IoChevronForward } from 'react-icons/io5';
import ModalLayout from 'layouts/ModalLayout';
import NoticeDetail from '../NoticeDetail';

function GroupInfo() {
  const { id: groupId } = useParams();
  const { data: noticeList } = useSWR(`/group/${groupId}/notices`, fetcher);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <TitleDiv>
        📒 그룹 공지
        <EditButton
          onClick={() => {
            setShowDetail(true);
          }}
        >
          수정 하기 <IoChevronForward />
        </EditButton>
      </TitleDiv>
      <ContentDiv>
        {!isEmpty(noticeList) ? (
          <>
            {noticeList.map((notice, i) => (
              <div key={i}>•&nbsp;&nbsp;{notice.content}</div>
            ))}
          </>
        ) : (
          <NoContent>공지사항이 없습니다.</NoContent>
        )}
      </ContentDiv>
      <ModalLayout
        show={showDetail}
        onCloseModal={() => {
          setShowDetail(false);
        }}
      >
        <NoticeDetail
          close={() => {
            setShowDetail(false);
          }}
        />
      </ModalLayout>
    </div>
  );
}

export default GroupInfo;
