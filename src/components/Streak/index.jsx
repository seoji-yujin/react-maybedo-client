import React, { useState, useEffect, useCallback } from 'react';
import { ScrollButton, StreakWrapper } from './style';
import dayjs from 'dayjs';
import StreakIcon from './StreakIcon';
import StreakTooltip from './StreakTooltip';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import useScroll from 'hooks/useScroll';

function Streak({ todoStreak, maxStreak, line, width, height }) {
  const [hoveringStreakIdx, setHoveringStreakIdx] = useState(-1);
  const [streakList, setStreakList] = useState([]);
  const [
    leftArrowHovering,
    rightArrowHovering,
    setArrowHovering,
    horizontalScrollRef,
    handleNextButtonClick,
  ] = useScroll();

  /**
   * 오늘 날짜에서 i번째 이전 날짜를 반환한다.
   */
  const getPreviousDate = useCallback((i) => {
    const today = new Date();
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - i);
    return previousDate;
  }, []);

  useEffect(() => {
    // 스트릭 정보 생성. 스트릭의 날짜를 key값으로 가지는 객체를 생성한다.
    const streakInfo = todoStreak.reduce((result, item) => {
      result[item.date] = item;
      return result;
    }, {});
    // maxStreak 개수 만큼 스트릭을 생성한다.
    // 스트릭 정보에는 날짜, x,y좌표, 그 날짜에 해결했는지 여부가 포함된다.
    setStreakList(
      [...Array(maxStreak)].map((_, i) => {
        const streakDate = dayjs(getPreviousDate(maxStreak - i - 1));
        const formatDate = dayjs(streakDate).format('YYYY-MM-DD');
        const percent = streakInfo.hasOwnProperty(formatDate)
          ? streakInfo[formatDate].percent
          : 0;
        return {
          date: formatDate,
          x: parseInt(i / line) * 20 + 1,
          y: (i % line) * 20 + 1,
          percent: percent,
        };
      })
    );
  }, [getPreviousDate, line, maxStreak, todoStreak]);

  return (
    <StreakWrapper>
      <ScrollButton
        onClick={(e) => {
          e.preventDefault();
          handleNextButtonClick('prev');
        }}
        onMouseOver={() => setArrowHovering('prev', true)}
        onMouseOut={() => setArrowHovering('prev', false)}
        type="prev"
        height={line * 20}
      >
        {leftArrowHovering && (
          <div>
            <FaChevronLeft />
          </div>
        )}
      </ScrollButton>
      <ScrollButton
        onClick={(e) => {
          e.preventDefault();
          handleNextButtonClick('next');
        }}
        onMouseOver={() => setArrowHovering('next', true)}
        onMouseOut={() => setArrowHovering('next', false)}
        type="next"
        height={line * 20}
      >
        {rightArrowHovering && (
          <div>
            <FaChevronRight />
          </div>
        )}
      </ScrollButton>
      <div ref={horizontalScrollRef}>
        <svg height={height} width={width} overflow="auto">
          {streakList.map((streak, i) => (
            <React.Fragment key={`${streak.date}-fragment`}>
              <StreakIcon
                isHovering={hoveringStreakIdx === i}
                onMouseEnter={() => {
                  setHoveringStreakIdx(i);
                }}
                onMouseOut={() => {
                  setHoveringStreakIdx(-1);
                }}
                streak={streak}
              />
            </React.Fragment>
          ))}
          {/* 툴팁 */}
          {hoveringStreakIdx !== -1 && (
            <StreakTooltip streak={streakList[hoveringStreakIdx]} />
          )}
        </svg>
      </div>
    </StreakWrapper>
  );
}

export default Streak;
