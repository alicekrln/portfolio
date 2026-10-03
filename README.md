# Alice Karlén – Portfolio

My personal portfolio as a frontend development student in Stockholm.

**Live site:** [alicekarlen.com](https://alicekarlen.com)

A single scrolling page with bold, full-width color sections and scroll-driven animations, plus a page for each project.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with React and TypeScript
- [Tailwind CSS](https://tailwindcss.com) with [tailwindcss-animated](https://www.tailwindcss-animated.com)
- [GSAP](https://gsap.com) (ScrollTrigger, SplitText) for scroll and text animations
- [Motion](https://motion.dev) for small interactions
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [Zustand](https://zustand.docs.pmnd.rs) for the intro state
- [Vercel](https://vercel.com) for hosting and Web Analytics

## Project structure

```
src/
├── app/                  Pages, layout and global styles
│   └── projects/[slug]/  One page per project
├── assets/               Project screenshots
├── components/
│   ├── layout/           Navbar, smooth scrolling, small shared pieces
│   ├── projects/         Project rows on the home page
│   ├── sections/         Hero, About, Marquee, Projects, Stack, Contact
│   └── ui/               Reusable building blocks
├── lib/                  Content (data.ts), GSAP setup and helpers
└── stores/               Intro animation state
```

Projects, skills and links all live in `src/lib/data.ts`.

## Contact

- [LinkedIn](https://www.linkedin.com/in/alicekarlen/)
- [GitHub](https://github.com/alicekrln)
