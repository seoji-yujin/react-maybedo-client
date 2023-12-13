import React, { useState } from 'react';
import {
  Container,
  GroupListWrapper,
  GroupWrapper,
  AddGroupButton,
  HeaderWrapper,
  GroupInfo,
  GroupName,
  MemberCountInfo,
  TagWrapper,
  GroupImage,
  AnotherGroupButton,
  SearchInputWrapper,
} from './style';
import { IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

function Group() {
  const { data: groups } = useSWR('/groups', fetcher);
  const navigate = useNavigate();
  const [hoverSearch, setHoverSearch] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  if (!groups) return null;

  return (
    <Container>
      <HeaderWrapper>
        {!searchMode && (
          <>
            <div>GROUPS</div>
            <AnotherGroupButton
              onClick={() => {
                setSearchMode(true);
              }}
            >
              둘러보기 🔍
            </AnotherGroupButton>
          </>
        )}
        {searchMode && (
          <SearchInputWrapper
            onMouseEnter={() => {
              setHoverSearch(true);
            }}
            onMouseLeave={() => {
              setHoverSearch(false);
            }}
          >
            {hoverSearch && (
              <IoChevronBack
                onClick={() => {
                  setSearchMode(false);
                }}
                style={{ cursor: 'pointer' }}
                size="21"
              />
            )}
            <input placeholder="🔍 그룹 검색" />
          </SearchInputWrapper>
        )}
      </HeaderWrapper>
      <GroupListWrapper>
        {groups.map((group, i) => (
          <GroupWrapper
            key={i}
            onClick={() => {
              navigate(`/main/group/detail/${group.id}`);
            }}
          >
            <GroupImage />
            <GroupInfo>
              <GroupName>{group.name}</GroupName>
              <TagWrapper>
                {group.groupTags.map((item, i) => (
                  <span key={i}>#{item.tag.content} </span>
                ))}
              </TagWrapper>
            </GroupInfo>
            <MemberCountInfo>
              {group.join_list.length}/{group.limit_member}
            </MemberCountInfo>
          </GroupWrapper>
        ))}
        {!searchMode && (
          <AddGroupButton>
            그룹 생성
            <IoAdd size="31" />
          </AddGroupButton>
        )}
      </GroupListWrapper>
    </Container>
  );
}

export default Group;
