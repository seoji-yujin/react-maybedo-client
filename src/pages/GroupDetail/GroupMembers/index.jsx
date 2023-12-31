import React, { useCallback } from 'react';
import {
  MemberWrapper,
  MemberDiv,
  ProfileWrapper,
  UserName,
  ProgressWrapper,
  UserInfo,
  TitleDiv,
} from './style';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { IoChevronForward } from 'react-icons/io5';
import ProfileImage from 'components/ProfileImage';
import { API_URL } from 'utils/constant';

function GroupMembers({ groupId, setUser, setShowDetail }) {
  const { data: memberInfo } = useSWR(`/group/members/${groupId}`, fetcher);

  const getRate = useCallback((user) => {
    if (!user) return 0;
    return !user.achievement ? 0 : Math.floor(user.achievement);
  }, []);

  if (!memberInfo) {
    return null;
  }

  return (
    <div>
      <TitleDiv>👩🏻‍💻 그룹원</TitleDiv>
      <MemberWrapper>
        {memberInfo.map((member) => (
          <MemberDiv
            key={member.id}
            onClick={() => {
              setUser(member);
              setShowDetail(true);
            }}
          >
            <ProfileWrapper>
              <ProfileImage
                width="3.5"
                height="3.5"
                src={`${
                  member.imagePath ? `${API_URL}/${member.imagePath}` : ''
                }`}
                cursor="default"
              />
            </ProfileWrapper>
            <UserInfo>
              <UserName>
                {member.name} <IoChevronForward />
              </UserName>
              <ProgressWrapper>
                <progress value={getRate(member)} max={100} />
                <div>{getRate(member)}%</div>
              </ProgressWrapper>
            </UserInfo>
          </MemberDiv>
        ))}
      </MemberWrapper>
    </div>
  );
}

export default GroupMembers;
