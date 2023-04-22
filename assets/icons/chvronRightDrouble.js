import React from "react";

const ChevronRightDouble = ({ width, height, color, strokeWidth }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 17L11 12L6 7M13 17L18 12L13 7"
        stroke={color || "black"}
        strokeWidth={strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightDouble;
