export const PROFILES = {
  Conservative: [
    { x: 'Developed Markets', y: 24 },
    { x: 'Emerging Markets', y: 6 },
    { x: 'Municipal Bonds', y: 50 },
    { x: 'US Total Stock Market', y: 10 },
    { x: 'US Large-Cap Value', y: 10 }
  ],

  Moderate: [
    { x: 'Developed Markets', y: 44 },
    { x: 'Emerging Markets', y: 12 },
    { x: 'Municipal Bonds', y: 24 },
    { x: 'US Total Stock Market', y: 10 },
    { x: 'US Large-Cap Value', y: 10 }
  ],

  Aggressive: [
    { x: 'Developed Markets', y: 38 },
    { x: 'Emerging Markets', y: 16 },
    { x: 'Municipal Bonds', y: 8 },
    { x: 'US Total Stock Market', y: 19 },
    { x: 'US Large-Cap Value', y: 19 }
  ]
};

export const PORTFOLIOS = Object.keys(PROFILES);

export const STATE = {
  'Developed Markets': 10000,
  'Emerging Markets': 10000,
  'Municipal Bonds': 10000,
  'US Total Stock Market': 10000,
  'US Large-Cap Value': 10000
};

export const ASSETS = Object.keys(STATE);
