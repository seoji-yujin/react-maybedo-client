import React from 'react';

function StreakTooltip({ streak }) {
  return (
    <g>
      <rect
        x={streak.x + 115 > 550 ? streak.x - 118 : streak.x + 22}
        y={streak.y}
        width={115}
        height={20}
        rx={5}
        fill="#2a2a2a"
      />
      <text
        x={streak.x + 115 > 550 ? streak.x - 13 : streak.x + 128}
        y={14 + streak.y}
        fontSize={12}
        fill="white"
      >
        {Math.ceil(streak.percent)}% : {streak.date}
      </text>
    </g>
  );
}

export default StreakTooltip;
