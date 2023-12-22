import React, { useCallback, useMemo, useState } from 'react';
import {
  Container,
  TitleDiv,
  GroupProfileWrapper,
  MenuList,
  MenuDiv,
  GroupInfoDiv,
  Content,
  GroupImage,
  OutButton,
} from './style';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import UserTodo from './UserTodoDetail';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import {
  GroupDesc,
  GroupName,
  GroupSummary,
  TagWrapper,
} from 'components/GroupInfo/style';
import { BsPersonFill, BsPerson } from 'react-icons/bs';
import { IoCalendarClear, IoGridOutline } from 'react-icons/io5';
import GroupMembers from './GroupMembers';
import GroupInfo from './GroupInfo';
import ModalLayout from 'layouts/ModalLayout';
import useRequest from 'hooks/useRequest';
import { deleteGroup } from 'apis/group';
import DeleteConfirmPopup from './DeleteConfirmPopup';
import { toast } from 'react-toastify';

function GroupDetail() {
  const { id } = useParams();
  const { data: groupInfo } = useSWR(`/group/${id}`, fetcher);

  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const menuList = useMemo(
    () => [
      {
        id: 1,
        label: 'INFO',
        icon: <IoGridOutline size="13" />,
        component: <GroupInfo />,
      },
      {
        id: 2,
        label: 'MEMBERS',
        icon: <BsPerson />,
        component: (
          <GroupMembers
            setUser={setSelectUser}
            setShowDetail={setShowDetail}
            groupId={id}
          />
        ),
      },
    ],
    [id]
  );
  const [curMenu, setCurMenu] = useState(menuList[0]);

  const [showConfirm, setShowConfirm] = useState(false);
  const requestDelete = useRequest(deleteGroup);
  const withdrawGroup = useCallback(() => {
    requestDelete(groupInfo.id)
      .then((res) => {
        console.log(res);
        if (res === 1) {
          toast.success('그룹을 탈퇴하였습니다.');
          setShowConfirm(false);
          navigate('/group');
        }
      })
      .catch((e) => {
        toast.error('그룹을 탈퇴하지 못하였습니다.');
      });
  }, [groupInfo, navigate, requestDelete]);

  if (!groupInfo) {
    return null;
  }

  return (
    <Container>
      <TitleDiv>
        <div
          onClick={() => {
            navigate('/group');
          }}
        >
          <IoChevronBack />
          {groupInfo.name}
        </div>
        <OutButton
          onClick={() => {
            setShowConfirm(true);
          }}
        >
          그룹 나가기
        </OutButton>
      </TitleDiv>
      <Content>
        <GroupProfileWrapper>
          <GroupImage />
          <GroupInfoDiv>
            <div>
              <GroupSummary>
                <div>
                  <span>
                    <BsPersonFill />
                  </span>
                  {groupInfo.joinList.length}/{groupInfo.limitMember}
                </div>
                <div>
                  <span>
                    <IoCalendarClear />
                  </span>

                  {groupInfo.expireDate}
                </div>
              </GroupSummary>
              <GroupName>{groupInfo.name}</GroupName>
              <GroupDesc>{groupInfo.description}</GroupDesc>
            </div>
            <TagWrapper>
              {groupInfo.groupTags.map((item, i) => (
                <span key={i}>#{item.tag.content} </span>
              ))}
            </TagWrapper>
          </GroupInfoDiv>
        </GroupProfileWrapper>
        <MenuList>
          {menuList.map((menu) => (
            <MenuDiv
              key={menu.id}
              onClick={() => {
                setCurMenu(menu);
              }}
              selected={curMenu.id === menu.id}
            >
              {menu.icon} {menu.label}
            </MenuDiv>
          ))}
        </MenuList>
        {curMenu.component}
      </Content>
      <ModalLayout
        show={showDetail}
        onCloseModal={() => {
          setShowDetail(false);
        }}
      >
        <UserTodo
          close={() => {
            setShowDetail(false);
          }}
          user={selectUser}
        />
      </ModalLayout>
      <DeleteConfirmPopup
        show={showConfirm}
        onClose={() => {
          setShowConfirm(false);
        }}
        confirmCallback={withdrawGroup}
        groupName={groupInfo.name}
      />
    </Container>
  );
}

export default GroupDetail;
