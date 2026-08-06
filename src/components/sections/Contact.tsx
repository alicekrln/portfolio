import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons'

export function Contact() {
  return (
    <section
      id='contact'
      className='mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32'
    >
      <span className='mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground'>
        <span className='h-px w-8 bg-current' />
        04 - Say hello
      </span>
      <div className='relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background sm:p-16'>
        <div className='absolute -right-20 -top-20 h-72 w-72 animate-blob bg-tangerine grain' />
        <div className='absolute -bottom-16 -left-10 h-48 w-48 animate-float rounded-full bg-magenta' />
        <div className='absolute -bottom-10 right-8  h-28 w-28 animate-float rounded-full bg-teal opacity-90' />
        <div className='relative'>
          <div className='flex justify-center gap-6 sm:gap-8 p-10 sm:p-16 '>
            <a
              href='mailto:alice.karlen@hotmail.com'
              aria-label='E-mail'
              className='flex items-center gap-2 transition-colors hover:text-magenta'
            >
              <EmailIcon /> Email
            </a>
            <a
              href='https://www.linkedin.com/in/alicekarlen/'
              aria-label='LinkedIn'
              className='flex items-center gap-2 transition-colors hover:text-teal'
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href='https://github.com/alicekrln'
              aria-label='GitHub'
              className='flex items-center gap-2 transition-colors hover:text-tangerine'
            >
              <GithubIcon /> Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
