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
import { API_URL } from 'utils/constant';

function GroupInfo({ group, onClick }) {
  return (
    <GroupWrapper onClick={onClick}>
      <GroupImage
        src={`${group.imagePath ? `${API_URL}/${group.imagePath}` : ''}`}
      />
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

            {group.creationDate}
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
