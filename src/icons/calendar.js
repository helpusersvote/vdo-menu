import React from 'react'

export function CalendarIcon(props) {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g
        transform="translate(1.000000, 1.000000)"
        stroke="#1F75E7"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="10.25 5.25 0.25 5.25 0.25 57.75 57.75 57.75 57.75 5.25 47.75 5.25" />
        <polygon points="10.25 10.25 17.75 10.25 17.75 0.25 10.25 0.25" />
        <polygon points="40.25 10.25 47.75 10.25 47.75 0.25 40.25 0.25" />
        <path d="M17.75 4h22.5m-40 12.5h57.5M14 22.75v30m14.5-30v30m14.5-30v30M5.25 26.5h47.5m-47.5 10h47.5m-47.5 10h47.5" />
      </g>
    </svg>
  )
}

export default CalendarIcon
