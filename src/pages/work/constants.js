export const PROJECT_FILTERS = {
  all: 'All',
  react: 'React',
  vanillaJS: 'Vanilla JS',
};

export const PROJECTS = [
  {
    title: 'MV3',
    description: '6500 digital collectible characters, where holders get to directly benefit from the upside of the IP.',
    image: '/images/MV3-home-page.png',
    links: {
      site: 'https://mv3.io',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react, 'Redux'],
      other: [],
    },
  },
  {
    title: 'Camp Cosmos',
    description: 'Digital collectibles by world famous artist, Alexandra Zutto.',
    image: '/images/camp-cosmos-home-page.png',
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
    title: 'Silvercar Demo',
    description: 'A search page where a user can find their location by city name.',
    image: '/images/silvercar-home-page.png',
    links: {
      code: 'https://github.com/rvarela11/silvercar',
      site: 'http://robertvarela.com/silvercar',
    },
    tech: PROJECT_FILTERS.react,
    techs: {
      tech: [PROJECT_FILTERS.react, 'Redux'],
      other: [],
    },
  },
  {
    title: 'Bubblicious',
    description: 'A bubble game done in vanilla javascript.',
    image: '/images/bubblicious-home-page.png',
    links: {
      code: 'https://github.com/rvarela11/bubblicious',
      site: 'http://robertvarela.com/bubblicious',
    },
    tech: PROJECT_FILTERS.vanillaJS,
    techs: {
      tech: [PROJECT_FILTERS.vanillaJS],
      other: [],
    },
  },
];
