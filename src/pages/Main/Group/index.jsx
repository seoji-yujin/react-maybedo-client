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

function Group() {
  // 임시 데이터
  const groups = [
    { name: '얼리버드들', tags: ['모닝글로리', '해시태그'] },
    { name: '얼리버드들', tags: ['모닝글로리', '해시태그'] },
    { name: '얼리버드들', tags: ['모닝글로리', '해시태그'] },
    { name: '얼리버드들', tags: ['모닝글로리', '해시태그'] },
    {
      name: '얼리버드들',
      tags: [
        '모닝글로리',
        '해시태그',
        '모닝글로리',
        '해시태그',
        '모닝글로리',
        '해시태그',
      ],
    },
    { name: '얼리버드들', tags: [] },
  ];
  const navigate = useNavigate();
  const [hoverSearch, setHoverSearch] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

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
              navigate('/main/group/detail/1');
            }}
          >
            <GroupImage />
            <GroupInfo>
              <GroupName>{group.name}</GroupName>
              <TagWrapper>
                {group.tags.map((tag, i) => (
                  <span key={i}>#{tag} </span>
                ))}
              </TagWrapper>
            </GroupInfo>
            <MemberCountInfo>2/5</MemberCountInfo>
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
