export const PHASE_STATUS = {
  inProgress: 'In progress',
  next: 'Next',
  planned: 'Planned',
};

const TECH = {
  ethers: 'ethers.js',
  mantine: 'Mantine',
  materialUI: 'Material UI',
  metaMask: 'MetaMask',
  next: 'Next.js',
  react: 'React',
  reactHookForm: 'React Hook Form',
  reactRouter: 'React Router',
  redux: 'Redux',
  sass: 'Sass',
  tsParticles: 'tsParticles',
  typeScript: 'TypeScript',
  vite: 'Vite',
  vitest: 'Vitest',
  yup: 'Yup',
};

export const PROJECTS = [
  {
    description: [
      'Pay My Lawyer gives law firms one place to take payments by card, bank transfer, cash or check, send invoices, keep client records and book paid appointments. Firms sign up through a guided enrollment that verifies their business and owners with the payment provider they choose, Dwolla or Usio.',
      'Another team built it five years ago, but it never launched. The redesign runs in three phases: rebuild the website and enrollment on the existing backend, then the firm portal, then the backend itself.',
    ],
    highlights: [
      {
        text: 'A step-by-step setup with a separate path for each payment provider. Each screen checks only its own fields, and answers carry over when a firm switches providers.',
        title: 'Enrollment',
      },
      {
        text: 'Firms add each owner in a dialog that checks that ownership never adds up to more than 100%.',
        title: 'Beneficial owners',
      },
      {
        text: 'The home page shows an interactive payment in progress, so firms can see what their clients will experience before signing up.',
        title: 'Payment demo',
      },
      {
        text: 'TypeScript throughout, tests on the real router, and CI that lints, tests and builds every PR before it deploys.',
        title: 'Quality',
      },
    ],
    images: {
      project: '/images/pay-my-lawyer/projects/payment-demo.png',
      site: '/images/pay-my-lawyer/sites/home.png',
    },
    links: {
      code: 'https://github.com/rvarela11/pay-my-lawyer',
      site: 'https://rvarela11.github.io/pay-my-lawyer/',
    },
    outcome: 'Redesigning it for Pizaña Law Firm, an immigration practice in Brownsville, Texas.',
    phases: [
      { status: PHASE_STATUS.inProgress, title: 'Website and enrollment' },
      { status: PHASE_STATUS.next, title: 'Portal' },
      { status: PHASE_STATUS.planned, title: 'Backend' },
    ],
    role: 'Lead Engineer',
    slug: 'pay-my-lawyer',
    summary: 'Payment processing, invoicing and client records for law firms.',
    team: 'Solo',
    tech: [
      TECH.react,
      TECH.typeScript,
      TECH.vite,
      TECH.materialUI,
      TECH.reactRouter,
      TECH.reactHookForm,
      TECH.yup,
      TECH.vitest,
    ],
    title: 'Pay My Lawyer',
  },
  {
    description: [
      'MV3 sold 6,500 collectible 3D characters, each one owned on the blockchain, as the cast of a cinematic universe its collectors could take part in. Collectors connected a MetaMask wallet to mint, browse the full cast, track what they owned, and reveal new characters.',
    ],
    highlights: [
      {
        text: 'Led front-end development of both apps, the mint site and the main web app, guiding the team through code reviews, standards and technical decisions from inception to launch, working closely with a designer, a backend engineer and a smart contract engineer.',
        title: 'Leading the team',
      },
      {
        text: 'Private and public sales with Dutch-auction pricing and a live supply counter. Collectors connect MetaMask and mint through ethers.js.',
        title: 'Mint site',
      },
      {
        image: '/images/MV3/sites/gallery.png',
        text: 'Browse every character and scene, with search, sorting, faction filters and infinite scroll. Next.js image optimization and lazy loading keep a grid this large fast on any device.',
        title: 'Gallery',
      },
      {
        image: '/images/MV3/sites/hub.png',
        text: "Each collector's home: their characters, scenes, inventory and achievements, plus a collector score and leaderboard rank. Every collector also gets a public profile page to share.",
        title: 'Hub',
      },
      {
        image: '/images/MV3/sites/singularity.png',
        text: 'The reveal flow. Collectors pick which Singularities to reveal, see the results, and save a summary image to share.',
        title: 'Singularity',
      },
    ],
    images: {
      project: '/images/MV3/projects/gallery.png',
      site: '/images/MV3/sites/home.png',
    },
    linksNote: 'Sites offline',
    outcome: 'Sold out all 6,500 characters. Shipped two production apps, which have since been taken offline.',
    role: 'Senior Front-End Engineer',
    slug: 'mv3',
    summary: 'Collectible characters for a cinematic universe, from the sold-out mint to the collector hub.',
    team: 'Led 3 front-end engineers',
    tech: [
      TECH.next,
      TECH.react,
      TECH.redux,
      TECH.materialUI,
      TECH.sass,
      TECH.ethers,
      TECH.metaMask,
    ],
    title: 'MV3',
  },
  {
    description: [
      'Camp Cosmos is a collection of 10,000 illustrated campers, each one owned on the blockchain, with art by Brooklyn illustrator Alexandra "Zutto." Its story centers on an alien anthropologist who breaks orders to help Earth face the climate crisis. The site introduces that world through its lore, the cosmos, the team and an FAQ, and gives collectors a page to mint.',
    ],
    highlights: [
      {
        text: 'Tabbed sections with flip cards for each team member, the artist and the development partner.',
        title: 'Team page',
      },
      {
        text: 'Every MetaMask state from connecting to minted, a total-supply counter and status notifications, all built before the contract existed so the next team only had to plug it in.',
        title: 'Mint page',
      },
      {
        text: 'Each page has its own full-bleed illustrated background, with images optimized by Next.js.',
        title: 'Page design',
      },
    ],
    images: {
      project: '/images/camp-cosmos/projects/logo.png',
      site: '/images/camp-cosmos/sites/home.png',
    },
    links: {
      code: 'https://github.com/rvarela11/camp-cosmos',
      site: 'https://camp-cosmos.vercel.app',
    },
    outcome: 'Delivered the full site in four months, mint flow included, and handed it off to the team connecting the contract, as scoped.',
    role: 'Senior Front-End Engineer',
    slug: 'camp-cosmos',
    summary: 'Website for Camp Cosmos, a 10,000-piece collectible art project about protecting the planet.',
    team: 'Led 2 engineers and 1 designer',
    tech: [TECH.next, TECH.react, TECH.materialUI, TECH.sass],
    title: 'Camp Cosmos',
  },
  {
    description: [
      "The site you're on. A cyberpunk look (a neon-sign name, cards framed as heads-up display panels, a drifting particle background) without giving up accessibility.",
    ],
    highlights: [
      {
        text: 'The name in the hero flickers like a neon sign, and holds steady for visitors who prefer reduced motion.',
        title: 'Neon sign',
      },
      {
        text: 'Experience and work cards, and the nav, are framed as clipped heads-up display panels.',
        title: 'HUD panels',
      },
      {
        text: 'Meets WCAG 2.1 AA and works down to 320px wide. Reduced-motion visitors get no particles, zooms or slide transitions, and every keyboard focus ring is the same dashed cyan.',
        title: 'Accessibility',
      },
    ],
    images: {
      project: '/images/RV_logo_black.png',
      site: '/images/RV_portfolio_home.png',
    },
    links: {
      code: 'https://github.com/rvarela11/portfolio',
    },
    outcome: 'Live at robertvarela.com.',
    role: 'Designer & Developer',
    slug: 'portfolio',
    summary: 'This site: a cyberpunk-styled portfolio built with Next.js.',
    team: 'Solo, with Claude Code as a pair',
    tech: [TECH.next, TECH.react, TECH.mantine, TECH.sass, TECH.tsParticles],
    title: 'Portfolio',
  },
];
