const SKILL = {
  apolloGraphQL: 'Apollo GraphQL',
  cypress: 'Cypress',
  graphQL: 'GraphQL',
  javaScript: 'JavaScript',
  next: 'Next.js',
  react: 'React',
  redux: 'Redux',
  responsiveWebDesign: 'Responsive Web Design',
  typeScript: 'TypeScript',
};

// NOTE: Data from public/Roberto_Varela_Resume.pdf
export const EXPERIENCES = [
  {
    date: '03/2024 - 11/2026',
    description: [
      'Modernized front-end architecture using React and TypeScript, improving scalability and developer velocity.',
      'Resolved 100% of critical security vulnerabilities, automated 42% of manual tests with Cypress, and prototyped an AI natural language search tool.',
    ],
    employer: 'DISCO',
    image: '/logos/csdisco_logo.jpeg',
    skills: [
      SKILL.typeScript,
      SKILL.javaScript,
      SKILL.react,
      SKILL.redux,
      SKILL.cypress,
    ],
    title: 'Front-End Engineer II',
  },
  {
    date: '05/2022 - 02/2024',
    description: [
      'Led development of the N-Tier Visibility feature using React and TypeScript, enabling multi-tier forecasting for enterprise customers at global scale.',
      'Scaled the Galaxy Design System to the complexity of AWS Supply Chain, standardizing reusable UI components across the engineering organization.',
    ],
    employer: 'Amazon Web Services (AWS)',
    image: '/logos/aws_logo.jpeg',
    skills: [
      SKILL.typeScript,
      SKILL.react,
      SKILL.graphQL,
      SKILL.responsiveWebDesign,
    ],
    title: 'Front-End Engineer',
  },
  {
    date: '04/2021 - 05/2022',
    description: [
      'Optimized core features using React and REST APIs, improving performance and user experience for a platform serving 100K+ e-commerce businesses.',
    ],
    employer: 'ShipStation',
    image: '/logos/shipstation_logo.jpeg',
    skills: [SKILL.javaScript, SKILL.react, SKILL.redux],
    title: 'Front-End Engineer',
  },
  {
    date: '12/2019 - 04/2021',
    description: [
      'Developed high-performance directory interfaces using React and dynamic form systems, and enterprise-grade error handling used by global customers.',
    ],
    employer: 'Ping Identity',
    image: '/logos/ping_identity_logo.jpeg',
    skills: [SKILL.javaScript, SKILL.react, SKILL.redux],
    title: 'Front-End Engineer',
  },
  {
    date: '04/2019 - 11/2019',
    description: [
      'Shipped a production-ready health coaching web app in an agile environment, bridging design and backend teams to deliver a seamless user experience.',
    ],
    employer: 'Wellsmith',
    image: '/logos/wellsmith_logo.jpeg',
    skills: [
      SKILL.typeScript,
      SKILL.react,
      SKILL.redux,
      SKILL.graphQL,
      SKILL.apolloGraphQL,
      SKILL.cypress,
    ],
    title: 'Front-End Engineer',
  },
  {
    date: '11/2017 - 04/2019',
    description: [
      'Built internal tooling that supported 2x revenue growth and a top-50 U.S. freight brokerage ranking during a critical scaling period.',
    ],
    employer: 'Arrive Logistics',
    image: '/logos/arrive_logistics_logo.jpeg',
    skills: [
      SKILL.javaScript,
      SKILL.react,
      SKILL.redux,
      SKILL.graphQL,
      SKILL.apolloGraphQL,
    ],
    title: 'Front-End Engineer',
  },
];

// NOTE: Data from public/Roberto_Varela_Resume.pdf
export const PROJECTS = [
  {
    date: '03/2022 - 03/2023',
    description: [
      'Led front-end development across 3 production applications using Next.js, '
        + 'leading a team of 3 engineers through code reviews, standards-setting, and technical decision-making.',
    ],
    employer: 'Metav3rse',
    image: '/logos/metav3rse_logo.jpeg',
    skills: [
      SKILL.javaScript,
      SKILL.next,
      SKILL.react,
      SKILL.redux,
      SKILL.responsiveWebDesign,
    ],
    title: 'Senior Front-End Engineer',
  },
  {
    date: '04/2022 - 07/2022',
    description: [
      'Led a team of 2 engineers and 1 designer to build Camp Cosmos, and minting websites using Next.js.',
    ],
    employer: 'Camp Cosmos',
    image: '/logos/camp_cosmos_logo.jpeg',
    skills: [
      SKILL.javaScript,
      SKILL.next,
      SKILL.react,
      SKILL.responsiveWebDesign,
    ],
    title: 'Senior Front-End Engineer',
  },
];
