import React from 'react'

export function ClockIcon(props) {
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
        transform="translate(0.000000, 1.000000)"
        stroke="#1F75E7"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M53.587 32.5c0 13.117-10.633 23.75-23.75 23.75-13.12 0-23.75-10.633-23.75-23.75s10.63-23.75 23.75-23.75c13.117 0 23.75 10.633 23.75 23.75zM16.468 52.118l-4.132 4.133m30.862-4.138l4.138 4.138" />
        <polyline points="21.0865 33.75 31.0865 33.75 31.0865 18.75" />
        <path d="M4.837 18.75C.932 14.845.932 8.905 4.837 5c3.905-3.905 9.845-3.905 13.75 0m36.25 13.75c3.904-3.905 3.904-9.845 0-13.75-3.906-3.905-9.846-3.905-13.75 0" />
      </g>
    </svg>
  )
}

export default ClockIcon
