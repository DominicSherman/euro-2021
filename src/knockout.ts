import { Teams } from './predictions';

export interface MatchType {
  home: Teams | number;
  away: Teams | number;
  winner: Teams | null;
}

export interface RoundType {
  [key: string]: MatchType;
}

export const ROUND_OF_SIXTEEN: RoundType = {
  1: {
    home: Teams.Belgium,
    away: Teams.Portugal,
    winner: Teams.Belgium,
  },
  2: {
    home: Teams.Italy,
    away: Teams.Austria,
    winner: Teams.Italy,
  },
  3: {
    home: Teams.France,
    away: Teams.Switzerland,
    winner: Teams.Switzerland,
  },
  4: {
    home: Teams.Croatia,
    away: Teams.Spain,
    winner: Teams.Spain,
  },
  5: {
    home: Teams.Sweden,
    away: Teams.Ukraine,
    winner: Teams.Ukraine,
  },
  6: {
    home: Teams.England,
    away: Teams.Germany,
    winner: Teams.England,
  },
  7: {
    home: Teams.Netherlands,
    away: Teams.CzechRepublic,
    winner: Teams.CzechRepublic,
  },
  8: {
    home: Teams.Wales,
    away: Teams.Denmark,
    winner: Teams.Denmark,
  },
};

export const QUARTERFINALS: RoundType = {
  9: {
    home: 1,
    away: 2,
    winner: Teams.Italy,
  },
  10: {
    home: 3,
    away: 4,
    winner: Teams.Spain,
  },
  11: {
    home: 5,
    away: 6,
    winner: Teams.England,
  },
  12: {
    home: 7,
    away: 8,
    winner: Teams.Denmark,
  },
};

export const SEMIFINALS: RoundType = {
  13: {
    home: 9,
    away: 10,
    winner: null,
  },
  14: {
    home: 11,
    away: 12,
    winner: null,
  },
};

export const FINALS: RoundType = {
  15: {
    home: 13,
    away: 14,
    winner: null,
  },
};
