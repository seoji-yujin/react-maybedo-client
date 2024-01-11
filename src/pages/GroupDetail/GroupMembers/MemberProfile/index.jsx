import React from 'react';
import { ProfileWrapper, UserName, ProgressWrapper, UserInfo } from './style';
import { IoChevronForward } from 'react-icons/io5';
import ProfileImage from 'components/ProfileImage';
import { API_URL } from 'utils/constant';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

function MemberProfile({ member }) {
  const { data: userStreak } = useSWR(`/streak/${member.name}`, fetcher);
  return (
    <>
      <ProfileWrapper>
        <ProfileImage
          width="3.5"
          height="3.5"
          src={`${member.imagePath ? `${API_URL}/${member.imagePath}` : ''}`}
          cursor="default"
        />
      </ProfileWrapper>
      <UserInfo>
        <UserName>
          {member.name} <IoChevronForward />
        </UserName>
        <ProgressWrapper>
          <progress value={userStreak?.percent || 0} max={100} />
          <div>{Math.floor(userStreak?.percent) || 0}%</div>
        </ProgressWrapper>
      </UserInfo>
    </>
  );
}

export default MemberProfile;
