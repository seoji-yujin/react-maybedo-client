import React, { useCallback, useState } from 'react';
import {
  Container,
  GroupListWrapper,
  HeaderWrapper,
  SearchButton,
  TotalGroupDiv,
} from '../Group/style';
import { SearchInputWrapper, TagWrapper, TagDiv } from './style';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import GroupInfo from 'components/GroupInfo';
import useInput from 'hooks/useInput';
import { isEmpty } from 'lodash';
import JoinGroupPopup from './JoinGroupPopup';

function SearchGroup() {
  const [tags, setTags] = useState([]);
  const [keyword, onChangeKeyword, setKeyword] = useInput('');
  const { data: groups } = useSWR(
    !isEmpty(tags) ? `/find/tag/groups?tags=${tags.join(',')}` : '',
    fetcher
  );
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();

  // 해당 인덱스의 태그 삭제
  const deleteTags = useCallback(
    (index) => {
      setTags(tags.filter((_, i) => index !== i));
    },
    [tags]
  );

  // 입력한 태그를 태그 리스트에 추가
  const addTags = useCallback(() => {
    const addItem = keyword.trim();
    if (isEmpty(addItem)) return;
    setKeyword('');
    setTags((prev) => [...prev, addItem]);
  }, [keyword, setKeyword]);

  // 엔터키 눌렀을때 태그 리스트에 추가
  const [isComposing, setIsComposing] = useState(false);
  const onKeyDownTag = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key === 'Enter') {
        addTags();
      }
    },
    [addTags, isComposing]
  );

  return (
    <Container>
      <HeaderWrapper>
        <div>GROUPS</div>
        <SearchButton
          onClick={() => {
            navigate('/group');
          }}
        >
          내 그룹 보기 🏠
        </SearchButton>
      </HeaderWrapper>
      <SearchInputWrapper>
        <div>#</div>
        <input
          placeholder="검색할 태그를 입력하고 엔터를 눌러주세요."
          value={keyword}
          onChange={onChangeKeyword}
          onKeyDown={onKeyDownTag}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        />
      </SearchInputWrapper>
      {!isEmpty(tags) && (
        <TagWrapper>
          {tags.map((user, i) => (
            <TagDiv key={i}>
              {user}
              <div
                onClick={() => {
                  deleteTags(i);
                }}
              >
                &times;
              </div>
            </TagDiv>
          ))}
        </TagWrapper>
      )}
      {groups && (
        <GroupListWrapper>
          <TotalGroupDiv>
            {groups.length}개의 검색결과{' '}
            <div>
              검색한 태그들 중 하나 이상을 포함하는 그룹 목록이 표시됩니다.
            </div>
          </TotalGroupDiv>
          {groups.map((group, i) => (
            <GroupInfo
              key={i}
              group={group}
              onClick={() => {
                setSelectedGroup(group);
                setShowJoinPopup(true);
              }}
            />
          ))}
        </GroupListWrapper>
      )}
      <JoinGroupPopup
        show={showJoinPopup}
        onClose={() => {
          setShowJoinPopup(false);
        }}
        group={selectedGroup}
      />
    </Container>
  );
}

export default SearchGroup;
