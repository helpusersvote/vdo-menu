import React from 'react'

export function AirplaneIcon(props) {
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
        transform="translate(0.000000, 3.000000)"
        strokeWidth={2}
        stroke="#1F75E7"
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      >
        <polygon points="58.75 1.25 1.25 25 23.75 33.75" />
        <polygon points="58.75 1.25 48.75 47.5 23.75 33.75" />
        <polyline points="23.75 33.75 23.75 53.75 32.5 38.75" />
      </g>
    </svg>
  )
}

export default AirplaneIcon
