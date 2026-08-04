export function BackgroundDecor() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div className='dot-bg absolute inset-0' />
      <div className='absolute -top-32 -left-24 h-130 w-130 rounded-full bg-tangerine opacity-40 blur-3xl animate-drift' />
      <div
        className='absolute top-1/3 -right-40 h-120 w-120 rounded-full bg-magenta opacity-30 blur-3xl animate-drift'
        style={{ animationDelay: '-4s' }}
      />
      <div
        className='absolute bottom-0 left-1/3 h-105 w-105 rounded-full bg-teal opacity-25 blur-3xl animate-drift'
        style={{ animationDelay: '-8s' }}
      />
      <div className='wild-only absolute inset-0'>
        <div className='wild-conic absolute inset-[-30%]' />
        <div className='wild-orb absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-magenta blur-2xl' />
        <div
          className='wild-orb absolute right-[8%] top-[40%] h-72 w-72 rounded-full bg-teal blur-2xl'
          style={{ animationDelay: '-3s' }}
        />
        <div
          className='wild-orb absolute left-[35%] bottom-[10%] h-60 w-60 rounded-full bg-mustard blur-2xl'
          style={{ animationDelay: '-6s' }}
        />
        <div className='wild-scan absolute inset-0' />
      </div>
    </div>
  )
}
