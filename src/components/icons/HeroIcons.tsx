import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const commonProps: IconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.5,
  viewBox: '0 0 24 24',
}

export function HomeIcon(props: IconProps): JSX.Element {
  return (
    <svg aria-hidden="true" {...commonProps} {...props}>
      <path d="m3 10.5 9-7.5 9 7.5" />
      <path d="M5.25 9.75V21h13.5V9.75M9 21v-6h6v6" />
    </svg>
  )
}

export function UserIcon(props: IconProps): JSX.Element {
  return (
    <svg aria-hidden="true" {...commonProps} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </svg>
  )
}

export function BellIcon(props: IconProps): JSX.Element {
  return (
    <svg aria-hidden="true" {...commonProps} {...props}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  )
}
