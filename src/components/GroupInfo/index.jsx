import React from 'react';
import {
  GroupWrapper,
  GroupInfoDiv,
  GroupName,
  TagWrapper,
  GroupImage,
  GroupDesc,
  GroupSummary,
} from './style';
import { BsPersonFill } from 'react-icons/bs';
import { IoCalendarClear } from 'react-icons/io5';

function GroupInfo({ group, onClick }) {
  return (
    <GroupWrapper onClick={onClick}>
      <GroupImage />
      <GroupInfoDiv>
        <GroupSummary>
          <div>
            <span>
              <BsPersonFill />
            </span>
            {group.joinList.length}/{group.limitMember}
          </div>
          <div>
            <span>
              <IoCalendarClear />
            </span>

            {group.expireDate}
          </div>
        </GroupSummary>
        <GroupName>{group.name}</GroupName>
        <GroupDesc>{group.description}</GroupDesc>
        <TagWrapper>
          {group.groupTags.map((item, i) => (
            <span key={i}>#{item.tag.content} </span>
          ))}
        </TagWrapper>
      </GroupInfoDiv>
    </GroupWrapper>
  );
}

export default GroupInfo;
