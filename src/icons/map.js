import React from 'react'

export function MapIcon(props) {
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
        stroke="#2177E8"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      >
        <path d="M17.5 12.75v40M35 25.25v-25" strokeLinecap="round" />
        <polyline
          strokeLinecap="round"
          points="27.74275 45.61125 17.75025 52.74875 0.25025 40.24875 0.25025 0.24875 17.75025 12.74875 35.25025 0.24875 52.75025 12.74875 52.75025 30.24875"
        />
        <path d="M51.776 42.267c0 5.252-4.26 9.512-9.513 9.512a9.512 9.512 0 0 1-9.512-9.513c0-5.257 4.258-9.517 9.513-9.517 5.252 0 9.512 4.26 9.512 9.517z" />
        <path d="M49 49l8.75 8.75" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default MapIcon
