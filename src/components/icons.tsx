import type { ComponentType, SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>
export type Icon = ComponentType<IconProps>

function StrokeIcon({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      {children}
    </svg>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
    </StrokeIcon>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M8 11v5' />
      <path d='M8 8v.01' />
      <path d='M12 16v-5' />
      <path d='M16 16v-3a2 2 0 1 0 -4 0' />
      <path d='M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10' />
    </StrokeIcon>
  )
}

export function EmailIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10' />
      <path d='M3 7l9 6l9 -6' />
    </StrokeIcon>
  )
}

export function FigmaIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M12 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M6 6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3' />
      <path d='M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' />
    </StrokeIcon>
  )
}

export function CodeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='m18 16 4-4-4-4' />
      <path d='m6 8-4 4 4 4' />
      <path d='m14.5 4-5 16' />
    </StrokeIcon>
  )
}

export function LayersIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z' />
      <path d='M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12' />
      <path d='M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17' />
    </StrokeIcon>
  )
}

export function PaletteIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z' />
      <circle cx='13.5' cy='6.5' r='.5' fill='currentColor' />
      <circle cx='17.5' cy='10.5' r='.5' fill='currentColor' />
      <circle cx='6.5' cy='12.5' r='.5' fill='currentColor' />
      <circle cx='8.5' cy='7.5' r='.5' fill='currentColor' />
    </StrokeIcon>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx='12' cy='12' r='10' />
      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
      <path d='M2 12h20' />
    </StrokeIcon>
  )
}

export function WrenchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z' />
    </StrokeIcon>
  )
}

export function PenToolIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z' />
      <path d='m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18' />
      <path d='m2.3 2.3 7.286 7.286' />
      <circle cx='11' cy='11' r='2' />
    </StrokeIcon>
  )
}

export function ServerIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect width='20' height='8' x='2' y='2' rx='2' ry='2' />
      <rect width='20' height='8' x='2' y='14' rx='2' ry='2' />
      <line x1='6' x2='6.01' y1='6' y2='6' />
      <line x1='6' x2='6.01' y1='18' y2='18' />
    </StrokeIcon>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M5 12h14' />
      <path d='m12 5 7 7-7 7' />
    </StrokeIcon>
  )
}

export function AsteriskIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M12 5v14' />
      <path d='m18.065 8.496-12.125 7' />
      <path d='m5.94 8.504 12.125 7' />
    </StrokeIcon>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M7 7h10v10' />
      <path d='M7 17 17 7' />
    </StrokeIcon>
  )
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='m12 19-7-7 7-7' />
      <path d='M19 12H5' />
    </StrokeIcon>
  )
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d='M15 3h6v6' />
      <path d='M10 14 21 3' />
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    </StrokeIcon>
  )
}

export type SmileyVariant = 'happy' | 'tongue' | 'xEyes' | 'wink'

interface SmileyProps extends IconProps {
  fillColor?: string
  variant?: SmileyVariant
}

const FACE_FILL =
  'M 174 48 C 222 35, 277 38, 320 50 C 400 72, 456 151, 463 235 C 472 347, 400 438, 306 463 C 207 489, 106 450, 61 369 C 15 286, 39 180, 92 112 C 113 85, 143 61, 174 48 Z'

const FACE_OUTLINE = `
  M 177 81
  C 207 61, 244 53, 280 53
  C 371 53, 449 137, 449 244
  C 449 358, 363 449, 247 449
  C 142 449, 65 371, 57 264
  C 50 170, 99 112, 176 72
  M 176 72
  C 172 75, 171 79, 173 82
  C 175 85, 179 86, 183 84
  C 190 81, 198 77, 207 73
`

const EYE_LEFT = 'M 153 198 C 154 177, 168 169, 184 169 C 201 169, 216 181, 218 199'
const EYE_RIGHT = 'M 287 198 C 288 177, 302 169, 319 169 C 337 169, 350 181, 352 198'
const SMILE =
  'M 122 242 C 128 284, 147 316, 174 337 C 199 357, 227 368, 258 368 C 290 368, 318 357, 339 335 C 362 310, 376 276, 376 229'

export function Smiley({
  fillColor = 'var(--color-sun)',
  variant = 'happy',
  ...props
}: SmileyProps) {
  const strokeColor = `color-mix(in srgb, ${fillColor} 65%, black)`
  const line = {
    stroke: strokeColor,
    strokeWidth: 14,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  }

  return (
    <svg
      viewBox='0 0 512 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      {...props}
    >
      <path d={FACE_FILL} fill={fillColor} />
      <path d={FACE_OUTLINE} {...line} />

      {variant === 'xEyes' ? (
        <>
          <path d='M 158 172 L 210 224 M 210 172 L 158 224' {...line} />
          <path d='M 292 172 L 344 224 M 344 172 L 292 224' {...line} />
          <path
            d='M 130 260 C 160 320 210 355 258 355 C 306 355 356 320 386 260'
            {...line}
          />
        </>
      ) : (
        <>
          <path d={EYE_LEFT} {...line} />
          {variant === 'wink' ? (
            <path d='M 288 196 L 350 196' {...line} />
          ) : (
            <path d={EYE_RIGHT} {...line} />
          )}
          <path d={SMILE} {...line} />
          {variant === 'tongue' && (
            <path
              d='M 220 330 C 224 366, 250 388, 262 388 C 278 388, 296 368, 296 340'
              fill={strokeColor}
              opacity={0.9}
            />
          )}
        </>
      )}
    </svg>
  )
}
