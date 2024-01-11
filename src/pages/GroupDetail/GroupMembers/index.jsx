import React from 'react';
import { MemberWrapper, MemberDiv, TitleDiv } from './style';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import MemberProfile from './MemberProfile';

function GroupMembers({ groupId, setUser, setShowDetail }) {
  const { data: memberInfo } = useSWR(`/group/members/${groupId}`, fetcher);

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
            <MemberProfile member={member} />
          </MemberDiv>
        ))}
      </MemberWrapper>
    </div>
  );
}

export default GroupMembers;
