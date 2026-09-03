import { toneColor, type Tone } from '@/lib/data'
import { forwardRef } from 'react'

interface ShapesProps {
  fillColor: Tone | string
  className?: string
}

export const BlobPath = forwardRef<SVGSVGElement, ShapesProps>(
  ({ fillColor, className }, ref) => {
    const fill =
    fillColor in toneColor ? toneColor[fillColor as Tone] : fillColor
    return (
      <svg
        ref={ref}
        width='100%'
        height='100%'
        viewBox='0 0 1500 725'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M192.048 481.621C99.1052 492.222 83.4672 579.197 71.3557 641.445C62.1059 688.985 26.4293 707.473 0 725H1498.47C1498.47 725 1498.47 388.223 1497.15 279.938C1495.83 171.652 1530.18 -29.3976 1391.44 3.61645C1252.69 36.6305 1304.22 163.922 1194.55 184.658C1084.87 205.394 1094.86 136.501 1013.52 114.543C904.996 85.2489 854.818 132.369 827.61 184.658C797.171 243.156 765.711 303.617 617.095 256.202C431.294 196.924 398.666 283.239 368.299 363.573C352.665 404.932 337.63 444.706 302.601 462.209C271.402 477.799 248.424 481.621 192.048 481.621Z'
          fill={fill}
          />
      </svg>
    )
  },
)


BlobPath.displayName = 'BlobPath'

export function Flower1({ fillColor, className }: ShapesProps) {
  const fill = fillColor in toneColor ? toneColor[fillColor as Tone] : fillColor

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 129 136'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M86.8295 29.6402C109.835 -9.88005 19.1663 -9.88005 42.1716 29.6402C19.1663 -9.88005 -26.1663 68.0005 19.8409 68.0005C-26.1663 68.0005 19.1663 145.881 42.1716 106.357C19.1663 145.881 109.835 145.881 86.8295 106.357C109.835 145.881 155.167 68.0005 109.157 68.0005C155.167 68.0005 109.835 -9.88005 86.8295 29.6402Z'
        fill={fill}
      />
    </svg>
  )
}

export function Flower2({ fillColor, className }: ShapesProps) {
  const fill = fillColor in toneColor ? toneColor[fillColor as Tone] : fillColor

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 119 134'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M62.1557 62.3779C109.957 -20.7926 9.04339 -20.7926 56.8444 62.3779C9.04339 -20.7926 -41.4133 67.0004 54.1889 67.0004C-41.4133 67.0004 9.04339 154.793 56.8444 71.6195C9.04339 154.793 109.957 154.793 62.1557 71.6195C109.957 154.793 160.413 67.0004 64.8112 67.0004C160.413 67.0004 109.957 -20.7926 62.1557 62.3779Z'
        fill={fill}
      />
    </svg>
  )
}

export function Flower3({ fillColor, className }: ShapesProps) {
  const fill = fillColor in toneColor ? toneColor[fillColor as Tone] : fillColor

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 124 125'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M63.4 62.5005C200.562 62.5005 61.9995 202.181 61.9995 63.9089C61.9995 202.181 -76.5633 62.5005 60.6024 62.5005C-76.5633 62.5005 61.9995 -77.1797 61.9995 61.0887C61.9995 -77.1797 200.562 62.5005 63.4 62.5005Z'
        fill={fill}
      />
    </svg>
  )
}
