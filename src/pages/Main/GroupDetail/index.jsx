import React, { useMemo, useState } from 'react';
import {
  Container,
  TitleDiv,
  GroupProfileWrapper,
  MenuList,
  MenuDiv,
  GroupInfoDiv,
  Content,
  GroupImage,
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
import Modal from 'layouts/Modal';
import ModalLayout from 'layouts/ModalLayout';

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

  if (!groupInfo) {
    return null;
  }

  return (
    <Container>
      <TitleDiv
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoChevronBack />
        {groupInfo.name}
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
    </Container>
  );
}

export default GroupDetail;
