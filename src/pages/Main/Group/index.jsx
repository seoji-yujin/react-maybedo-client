import React from 'react';
import {
  Container,
  GroupListWrapper,
  GroupWrapper,
  AddGroupButton,
  HeaderWrapper,
  GroupInfo,
  GroupName,
  TagWrapper,
  GroupImage,
  GroupDesc,
} from './style';
import { IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

function Group() {
  const { data: groups } = useSWR('/member/my_group', fetcher);
  const navigate = useNavigate();

  if (!groups) return null;

  return (
    <Container>
      <HeaderWrapper>
        <div>GROUPS</div>
      </HeaderWrapper>
      <GroupListWrapper>
        {groups.map((group, i) => (
          <GroupWrapper
            key={i}
            onClick={() => {
              navigate(`/group/${group.id}`);
            }}
          >
            <GroupImage />
            <GroupInfo>
              <GroupName>{group.name}</GroupName>
              <GroupDesc>{group.description}</GroupDesc>
              <TagWrapper>
                {group.groupTags.map((item, i) => (
                  <span key={i}>#{item.tag.content} </span>
                ))}
              </TagWrapper>
            </GroupInfo>
            {/* <MemberCountInfo>
              {group.joinList.length}/{group.limitMember}
            </MemberCountInfo> */}
          </GroupWrapper>
        ))}
        <AddGroupButton
          onClick={() => {
            navigate('/group/create');
          }}
        >
          그룹 추가
          <IoAdd size="21" />
        </AddGroupButton>
      </GroupListWrapper>
    </Container>
  );
}

export default Group;
