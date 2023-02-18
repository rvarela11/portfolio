export const PROJECT_FILTERS = {
  all: 'All',
  react: 'React',
  vanillaJS: 'Vanilla JS',
};

export const PROJECTS = [
  {
    title: 'MV3',
    description: '6500 digital collectible characters, where holders get to directly benefit from the upside of the IP.',
    image: '/images/MV3/logo.jpg',
    links: {
      site: 'https://www.mv3.io',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react, 'Redux'],
      other: [],
    },
  },
  {
    title: 'MV3 - Gallery',
    description: '6500 digital collectible characters, where holders get to directly benefit from the upside of the IP.',
    image: '/images/MV3/gallery-page.png',
    links: {
      site: 'https://www.mv3.io/gallery',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react, 'Redux'],
      other: [],
    },
  },
  {
    title: 'MV3 - Hub',
    description: '6500 digital collectible characters, where holders get to directly benefit from the upside of the IP.',
    image: '/images/MV3/hub-page.jpg',
    links: {
      site: 'https://www.mv3.io/hub',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react, 'Redux', 'Web3'],
      other: [],
    },
  },
  {
    title: 'Singularity',
    description: '',
    image: '/images/MV3/singularity.png',
    links: {
      site: 'https://www.mv3.io/singularity',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react, 'Redux', 'Web3'],
      other: [],
    },
  },
  {
    title: 'Camp Cosmos',
    description: 'Digital collectibles by world famous artist, Alexandra Zutto.',
    image: '/images/camp-cosmos/logo.png',
    links: {
      site: 'https://camp-cosmos.vercel.app',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react],
      other: [],
    },
  },
  {
    title: 'Portfolio',
    description: 'Roberto Varela Portfolio',
    image: '/images/RV_logo_black.png',
    links: {
      code: 'https://github.com/rvarela11/portfolio',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react],
      other: [],
    },
  },
  {
    title: 'Bubblicious',
    description: 'A bubble game done in vanilla javascript.',
    image: '/images/bubblicious/all-game-boys.png',
    links: {
      code: 'https://github.com/rvarela11/bubblicious',
      site: 'http://rvarela11.github.io/bubblicious',
    },
    tech: PROJECT_FILTERS.vanillaJS,
    techs: {
      tech: [PROJECT_FILTERS.vanillaJS],
      other: [],
    },
  },
];
