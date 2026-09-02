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
        viewBox='0 0 562 562'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M68.6687 469.619C38.3911 471.078 12.1988 503.769 11.5 527.769C11.0487 543.269 2.49939 552.769 0 559.769L561.5 561.769C561.5 561.769 562 433.769 561.5 392.769C561 351.769 545.501 289.769 493.001 302.269C440.501 314.769 475.999 366.932 438.5 378.269C401.001 389.606 401.28 337.583 370.5 329.269C329.438 318.177 319.452 337.382 309.156 357.18C297.639 379.329 285.734 402.222 229.5 384.269C159.196 361.824 146.85 394.506 135.36 424.922C129.444 440.582 123.755 455.642 110.5 462.269C98.6952 468.172 83.6373 468.897 68.6687 469.619Z'
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
