import { shared } from '../shared/shared';
import { Theme } from '../types/theme';

import { sportsbet } from './private/sportsbet';

const lights = {
  100: '#FFFFFF',
  80: '#F3F5F6',
  60: '#EDEFF1',
  40: '#E7EAEC',
  20: '#DBE0E3',
  10: '#CFD5DA',
};

const color = {
  hit: {
    100: '#1A212A',
    80: '#31373F',
    60: '#484D55',
    40: '#5F646A',
    20: '#767A7F',
    10: '#8C9095',
  },
  goku: {
    100: '#1F262F',
    80: '#353C44',
    60: '#41474E',
    40: '#4C5159',
    20: '#575C63',
    10: '#62676D',
  },
  gohan: {
    100: '#1A212A',
    80: '#31373F',
    60: '#484D55',
    40: '#5F646A',
    20: '#767A7F',
    10: '#8C9095',
  },
  beerus: {
    100: '#212830',
    80: '#2C333A',
    60: '#373D45',
    40: '#42484F',
    20: '#4D5359',
    10: '#585E64',
  },
  goten: lights,
  bulma: lights,
};

const {
  base,
  border,
  borderStyle,
  borderWidth,
  breakpoint,
  radius,
  space,
  transitionDuration,
} = shared;

export const sportsbetDark: Theme = {
  base,
  border,
  borderStyle,
  borderWidth,
  breakpoint,
  brand: 'Sportsbet.io',
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sportsbet.color,
    ...shared.color,
  },
  colorScheme: 'dark',
  ...sportsbet.font,
  radius,
  space,
  transitionDuration,
};
