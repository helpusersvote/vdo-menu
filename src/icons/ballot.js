import React from 'react'

export function BallotIcon(props) {
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
        strokeLinejoin="round"
      >
        <polygon points="0.25 57.75 57.75 57.75 57.75 0.25 0.25 0.25" />
        <polyline
          strokeLinecap="round"
          points="7.75 17.75 12.75 22.75 25.25 10.25"
        />
        <polyline
          strokeLinecap="round"
          points="7.75 40.25 12.75 45.25 25.25 32.75"
        />
        <path d="M30.25 20h20m-20 22h20" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default BallotIcon
