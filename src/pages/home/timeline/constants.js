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

// NOTE: Data from https://www.linkedin.com/in/rvarela11
export const EXPERIENCES = [
  {
    date: '05/2022 - 02/2024',
    description: [
      'Led the N-Tier Visibility (Forecast Commits) feature which extends visibility of the AWS Supply Chain app.',
      'Core contributor to the Galaxy Design System, figuring out how to scale a design system to the complexity of AWS Supply Chain.',
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
    date: '03/2021 - 03/2023',
    description: [
      "Led a team of 3 engineers to develop MV3, Singularity, and Mint websites using Next.js. Utilized Next.js's file-system-based router for efficient routing and dynamic routing for user profile pages. Implemented shared SEO component for optimal search engine visibility. And incorporated Next.js image optimization for MV3 gallery, ensuring correct sizes for devices and faster page loads with lazy loading.( https://mv3.io )",
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
    date: '04/2021 - 05/2022',
    description: [
      'Worked within a cross-functional team to enhance, optimize, and add functionality to ShipStation software platform.',
    ],
    employer: 'ShipStation',
    image: '/logos/shipstation_logo.jpeg',
    skills: [SKILL.javaScript, SKILL.react, SKILL.redux],
    title: 'Front-End Engineer',
  },
  {
    date: '12/2019 - 04/2021',
    description: [
      'Designed and built a client facing high-performance directory using flexible forms, tables with download/upload capabilities, and robust UI error handling.',
    ],
    employer: 'Ping Identity',
    image: '/logos/ping_identity_logo.jpeg',
    skills: [SKILL.javaScript, SKILL.react, SKILL.redux],
    title: 'Front-End Engineer',
  },
  {
    date: '04/2019 - 11/2019',
    description: [
      'Worked with designers, product owners, and backend developers in an agile environment to turn ideas and mockups into a production-ready web application.',
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
      'Built internal web based tools with technologies such as react, redux, graphQL, and apollo. These new tools helped the company stay on track to double its revenue and continue to move up in the top 50 brokerage firms.',
      'Developed the company’s first mobile app (React Native) to help increase market exposure and continue to be the fastest growing freight brokerage in history.',
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
