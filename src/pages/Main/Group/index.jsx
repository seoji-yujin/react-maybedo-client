import React from 'react';
import {
  Container,
  GroupListWrapper,
  AddGroupButton,
  HeaderWrapper,
  SearchButton,
  TotalGroupDiv,
} from './style';
import { IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import GroupInfo from 'components/GroupInfo';

function Group() {
  const { data: groups } = useSWR('/member/my_group', fetcher);
  const navigate = useNavigate();

  if (!groups) return null;

  return (
    <Container>
      <HeaderWrapper>
        <div>GROUPS</div>
        <SearchButton
          onClick={() => {
            navigate('/group/search');
          }}
        >
          검색하기 🔍
        </SearchButton>
      </HeaderWrapper>
      <GroupListWrapper>
        <TotalGroupDiv>{groups.length}개의 그룹에 참여중이에요</TotalGroupDiv>
        {groups.map((group, i) => (
          <GroupInfo
            key={i}
            group={group}
            onClick={() => {
              navigate(`/group/${group.id}`);
            }}
          />
        ))}
        <AddGroupButton
          onClick={() => {
            navigate('/group/create');
          }}
        >
          그룹 생성
          <IoAdd size="21" />
        </AddGroupButton>
      </GroupListWrapper>
    </Container>
  );
}

export default Group;
