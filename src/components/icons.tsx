import type { SVGProps } from 'react'

export function GithubIcon({ className }: { className?: string }) {
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
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-github ${className ?? ''}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
    </svg>
  )
}

export function LinkedinIcon() {
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
      className='icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8 11v5' />
      <path d='M8 8v.01' />
      <path d='M12 16v-5' />
      <path d='M16 16v-3a2 2 0 1 0 -4 0' />
      <path d='M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10' />
    </svg>
  )
}

export function EmailIcon() {
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
      className='icon icon-tabler icons-tabler-outline icon-tabler-mail'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10' />
      <path d='M3 7l9 6l9 -6' />
    </svg>
  )
}
export function FigmaIcon({ className }: { className?: string }) {
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
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-figma ${className ?? ''}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M6 6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3' />
      <path d='M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' />
    </svg>
  )
}

interface SmileyProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string
}

export function Smiley({
  fillColor: fillColor = 'F8E323',
  ...props
}: SmileyProps) {
  const strokeColor = `color-mix(in srgb, ${fillColor} 65%, black)`

  return (
    <svg
      viewBox='0 0 512 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {/* Filled yellow face */}
      <path
        d='
          M 174 48
          C 222 35, 277 38, 320 50
          C 400 72, 456 151, 463 235
          C 472 347, 400 438, 306 463
          C 207 489, 106 450, 61 369
          C 15 286, 39 180, 92 112
          C 113 85, 143 61, 174 48
          Z
        '
        fill={fillColor}
      />

      {/* Orange inner circle / outline */}
      <path
        d='
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
        '
        stroke={strokeColor}
        strokeWidth='14'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* Left eye */}
      <path
        d='
          M 153 198
          C 154 177, 168 169, 184 169
          C 201 169, 216 181, 218 199
        '
        stroke={strokeColor}
        strokeWidth='14'
        strokeLinecap='round'
      />

      {/* Right eye */}
      <path
        d='
          M 287 198
          C 288 177, 302 169, 319 169
          C 337 169, 350 181, 352 198
        '
        stroke={strokeColor}
        strokeWidth='14'
        strokeLinecap='round'
      />

      {/* Smile */}
      <path
        d='
          M 122 242
          C 128 284, 147 316, 174 337
          C 199 357, 227 368, 258 368
          C 290 368, 318 357, 339 335
          C 362 310, 376 276, 376 229
        '
        stroke={strokeColor}
        strokeWidth='14'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
