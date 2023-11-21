import { type Resource } from './types'

const CATEGORIES = ['Websites', 'Libraries', 'Tools', 'People']

const SUBCATEGORIES = {
  Websites: ['Learning', 'Immersive', 'Polished', 'Inspirations', 'Design Systems', 'Open Source'],
  Libraries: [
    'Authentication',
    'Forms',
    'Data Fetching',
    'Utilities',
    'State Management',
    'Animation',
    'User Interface',
  ],
  Tools: ['Productivity', 'Development'],
  People: ['Developers', 'Designers', 'Educators', 'Indie Hackers'],
}

const RESOURCES: Resource[] = [
  {
    name: 'Awwwards',
    description: 'TODO add description',
    url: 'https://www.awwwards.com/',
    category: 'Websites',
    subcategory: 'Inspirations',
  },
  {
    name: 'React Hook Form',
    description: 'Performant, flexible and extensible forms with easy-to-use validation.',
    url: 'https://react-hook-form.com/',
    category: 'Libraries',
    subcategory: 'Forms',
  },
  {
    name: 'Rauno Freiberg',
    description: 'Design Engineer at Vercel.',
    url: 'https://rauno.me/',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Godly',
    description: 'Astronomically good Inspirations inspiration from all over the internet',
    url: 'https://godly.dev/',
    category: 'Websites',
    subcategory: 'Inspirations',
  },
  {
    name: 'Taxonomy',
    description: 'An example app built using Next.js 13 server components.',
    url: 'https://tx.shadcn.com/',
    category: 'Websites',
    subcategory: 'Open Source',
  },
  {
    name: 'Raycast',
    description: 'The fastest way to control your tools.',
    url: 'https://raycast.com/',
    category: 'Tools',
    subcategory: 'Productivity',
  },
  {
    name: 'Build UI',
    description: 'Learn how to build modern user interfaces for the web.',
    url: 'https://buildui.com/',
    category: 'Websites',
    subcategory: 'Learning',
  },
  {
    name: 'React Query',
    description: 'Hooks for fetching, caching and updating asynchronous data in React.',
    url: 'https://react-query.tanstack.com/',
    category: 'Libraries',
    subcategory: 'Data Fetching',
  },
  {
    name: 'Lenis',
    description: 'Smooth scroll',
    url: 'https://lenis.studiofreight.com/',
    category: 'Libraries',
    subcategory: 'Animation',
  },
  {
    name: 'Scrollytelling',
    description: 'TODO add description',
    url: 'https://scrollytelling.basement.studio/',
    category: 'Libraries',
    subcategory: 'Animation',
  },
  {
    name: 'Sonner',
    description: 'An opinionated toast component for React',
    url: 'https://sonner.emilkowal.ski/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Vaul',
    description: 'Drawer component for React',
    url: 'https://vaul.emilkowal.ski/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Framer Motion',
    description: 'A production-ready motion library for React.',
    url: 'https://www.framer.com/motion/',
    category: 'Libraries',
    subcategory: 'Animation',
  },
  {
    name: 'GSAP',
    description: 'The standard for JavaScript HTML5 animation.',
    url: 'https://gsap.com/',
    category: 'Libraries',
    subcategory: 'Animation',
  },
  {
    name: 'Fig',
    description: 'The next-generation command line.',
    url: 'https://fig.io/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'Warp',
    description:
      'Warp is a modern, Rust-based terminal with AI built in so you and your team can build great software, faster.',
    url: 'https://warp.dev/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'Josh tried coding',
    description: 'Sharing _TODO_ on his Youtube channel',
    url: 'https://www.youtube.com/@joshtriedcoding',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Devon Govett',
    description: 'Creator of Parcel. Working on React Aria at Adobe.',
    url: 'https://twitter.com/devongovett',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Levelsio',
    description: 'Maker of Nomad List, Remote OK, and other projects.',
    url: 'https://twitter.com/levelsio',
    category: 'People',
    subcategory: 'Indie Hackers',
  },
  {
    name: 'Pedro Duarte',
    description: 'DX Engineer at Raycast. Co-creator of Radix UI and Stitches.',
    url: 'https://ped.ro/',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Chris Kalafatis',
    description: 'TODO add description',
    url: 'https://chriskalafatis.com/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Kevin Powell',
    description: 'CSS and web development videos.',
    url: 'https://www.youtube.com/user/KepowOb',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Cal.com',
    description: 'TODO add description',
    url: 'https://cal.com/',
    category: 'Websites',
    subcategory: 'Open Source',
  },
  {
    name: 'Tremor',
    description: 'TODO add description',
    url: 'https://www.tremor.so/',
    category: 'Tools',
    subcategory: 'User Interface',
  },
  {
    name: 'Radix UI',
    description: 'TODO add description',
    url: 'https://www.radix-ui.com/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'React Aria Components',
    description: 'TODO add description',
    url: 'https://react-spectrum.adobe.com/react-aria/examples/index.html',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Draft UI',
    description: 'Designed React Aria Components with Tailwind CSS',
    url: 'https://draft-ui.com/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'React Wrap Balancer',
    description: 'Avoids single hanging word on the last line',
    url: 'https://react-wrap-balancer.vercel.app/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: '⌘K',
    description: 'Fast, composable, unstyled command menu for React',
    url: 'https://cmdk.paco.me/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Paco Coursey',
    description: 'Design Engineer at Linear',
    url: 'https://paco.me/',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Emil Kowalski',
    description: 'Design Engineer at Vercel.',
    url: 'https://emilkowal.ski//',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Josh W Comeau',
    description: 'TODO add description',
    url: 'https://www.joshwcomeau.com/',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Lee Robinson',
    description: 'VP of Developer Experience at Vercel',
    url: 'https://leerob.io/',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Delba de Oliveira',
    description: 'Developer Experience at Vercel.',
    url: 'https://delba.dev',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Zod',
    description: 'TypeScript-first schema validation with static type inference',
    url: 'https://zod.dev/',
    category: 'Libraries',
    subcategory: 'Forms',
  },
  {
    name: 'Clerk',
    description: 'TODO add description',
    url: 'https://clerk.com/',
    category: 'Libraries',
    subcategory: 'Authentication',
  },
  {
    name: 'Auth.js',
    description: 'TODO add description',
    url: 'https://authjs.dev/',
    category: 'Libraries',
    subcategory: 'Authentication',
  },
  {
    name: 'Zustand',
    description: 'TODO add description',
    url: 'https://github.com/pmndrs/zustand',
    category: 'Libraries',
    subcategory: 'State Management',
  },
  {
    name: 'dnd kit',
    description: 'Drag & Drop toolkit for React',
    url: 'https://dndkit.com/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Tiptap',
    description: 'Customizable rich text WYSIWYG editor',
    url: 'https://tiptap.dev/editor/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Bun',
    description: 'TODO add description',
    url: 'https://bun.sh/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'Vite',
    description: 'TODO add description',
    url: 'https://vitejs.dev/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'PlanetScale',
    description: 'TODO add description',
    url: 'https://planetscale.com/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'Supabase',
    description: 'TODO add description',
    url: 'https://supabase.com/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'date-fns',
    description: 'Modern JavaScript date utility library',
    url: 'https://date-fns.org/',
    category: 'Libraries',
    subcategory: 'Utilities',
  },
  {
    name: 'uuid',
    description: 'Generate RFC-compliant UUIDs in JavaScript',
    url: 'https://github.com/uuidjs/uuid',
    category: 'Libraries',
    subcategory: 'Utilities',
  },
  {
    name: 'Jack Herrington',
    description: 'TODO add description',
    url: 'https://www.youtube.com/@jherr',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Web Dev Simplified',
    description: 'TODO add description',
    url: 'https://www.youtube.com/@WebDevSimplified',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Lusion',
    description: 'TODO add description',
    url: 'https://lusion.co/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Zero',
    description: 'TODO add description',
    url: 'https://zero.tech/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Bruno Simon',
    description: 'TODO add description',
    url: 'https://bruno-simon.com/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'ColorSlurp',
    description: 'TODO add description',
    url: 'https://colorslurp.com/',
    category: 'Tools',
    subcategory: 'Productivity',
  },
  {
    name: 'ui.land',
    description: 'TODO add description',
    url: 'https://ui.land/',
    category: 'Websites',
    subcategory: 'Inspirations',
  },
  {
    name: 'Learn Next.js',
    description: 'TODO add description',
    url: 'https://nextjs.org/learn',
    category: 'Websites',
    subcategory: 'Learning',
  },
  {
    name: 'Matt Pocock',
    description: 'TODO add description/TS Wizzard',
    url: 'https://twitter.com/mattpocockuk',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Kent C. Dodds',
    description: 'TODO add description',
    url: 'https://kentcdodds.com/',
    category: 'People',
    subcategory: 'Educators',
  },
  {
    name: 'Jhey Tompkins',
    description: 'Senior DX Engineer at Vercel. CSS animation god.',
    url: 'https://twitter.com/jh3yy',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Dogsutdio',
    description: 'TODO add description',
    url: 'https://dogstudio.co/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Aristide Benoist',
    description: 'TODO add description',
    url: 'https://twitter.com/AristideBenoist',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Alex Frison de Isla',
    description: 'TODO add description',
    url: 'https://twitter.com/AlexFisla',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Locomotive',
    description: 'TODO add description',
    url: 'https://locomotive.ca/en',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Codrops',
    description: 'TODO add description',
    url: 'https://tympanus.net/codrops/',
    category: 'Websites',
    subcategory: 'Inspirations',
  },
  {
    name: 'This Week In React',
    description: 'Probably best React newsletter out there.',
    url: 'https://thisweekinreact.com/',
    category: 'Websites',
    subcategory: 'Learning',
  },
  {
    name: 'OKAY dev',
    description: 'A community for creative developers.',
    url: 'https://okay.dev/',
    category: 'Websites',
    subcategory: 'Inspirations',
  },
  {
    name: 'Linear',
    description: 'TODO add description',
    url: 'https://linear.app/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'Fey',
    description: 'TODO add description',
    url: 'https://www.feyapp.com/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'Diagram',
    description: 'TODO add description',
    url: 'https://diagram.com/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'Wope',
    description: 'TODO add description',
    url: 'https://wope.com/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'CSS Design Awards',
    description: 'TODO add description',
    url: 'https://www.cssdesignawards.com/',
    category: 'Websites',
    subcategory: 'Inspirations',
  },
  {
    name: 'Times Two',
    description: 'TODO add description',
    url: 'https://timestwo.design/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Atlas',
    description: 'TODO add description',
    url: 'https://atlascard.com/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'Primer',
    description: 'TODO add description gh',
    url: 'https://primer.style/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Carbon',
    description: 'TODO add description ibm',
    url: 'https://www.carbondesignsystem.com/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Polaris',
    description: 'TODO add description shopify',
    url: 'https://polaris.shopify.com/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Material UI',
    description: 'TODO add description google',
    url: 'https://mui.com/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Ant Design',
    description: 'TODO add description ant',
    url: 'https://ant.design/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Attlasian Design',
    description: 'TODO add description attlasian',
    url: 'https://atlassian.design/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Spectrum',
    description: 'TODO add description adobe',
    url: 'https://spectrum.adobe.com/',
    category: 'Websites',
    subcategory: 'Design Systems',
  },
  {
    name: 'Chakra UI',
    description: 'TODO add description',
    url: 'https://chakra-ui.com/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Ilya Miskov',
    description: 'Human Interface Designer at Whop',
    url: 'https://twitter.com/ilyamiskov',
    category: 'People',
    subcategory: 'Designers',
  },
  {
    name: 'Storybook',
    description: 'TODO add description',
    url: 'https://storybook.js.org/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'Resend',
    description: 'TODO add description',
    url: 'https://resend.com/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'Resend API',
    description: 'Email API for developers',
    url: 'https://resend.com/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'React Email',
    description: 'Build and send emails using React and TypeScript',
    url: 'https://react.email/',
    category: 'Tools',
    subcategory: 'Development',
  },
  {
    name: 'Steven Tey',
    description: 'Senior Developer Advocate at Vercel. Maintaining OSS projects.',
    url: 'https://twitter.com/steventey',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Three.js Journey',
    description: 'Become a Three.js developer',
    url: 'https://threejs-journey.com/',
    category: 'Websites',
    subcategory: 'Learning',
  },
  {
    name: 'Oğuz Yağız Kara',
    description: 'Designer at WorkOS',
    url: 'https://twitter.com/oguzyagizkara',
    category: 'People',
    subcategory: 'Designers',
  },
  {
    name: 'James',
    description: 'Design Lead at Clerk',
    url: 'https://twitter.com/jamesm',
    category: 'People',
    subcategory: 'Designers',
  },
]

export { CATEGORIES, SUBCATEGORIES, RESOURCES }
