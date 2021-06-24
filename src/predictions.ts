export enum Teams {
  Italy = 'Italy',
  Switzerland = 'Switzerland',
  Turkey = 'Turkey',
  Wales = 'Wales',
  Belgium = 'Belgium',
  Denmark = 'Denmark',
  Finland = 'Finland',
  Russia = 'Russia',
  Austria = 'Austria',
  Netherlands = 'Netherlands',
  NorthMacedonia = 'FYR Macedonia',
  Ukraine = 'Ukraine',
  Croatia = 'Croatia',
  CzechRepublic = 'Czech Republic',
  England = 'England',
  Scotland = 'Scotland',
  Poland = 'Poland',
  Slovakia = 'Slovakia',
  Spain = 'Spain',
  Sweden = 'Sweden',
  France = 'France',
  Germany = 'Germany',
  Hungary = 'Hungary',
  Portugal = 'Portugal',
}

interface GroupPrediction {
  1: Teams;
  2: Teams;
  3: Teams;
  4: Teams;
}

export interface Prediction {
  A: GroupPrediction;
  B: GroupPrediction;
  C: GroupPrediction;
  D: GroupPrediction;
  E: GroupPrediction;
  F: GroupPrediction;
}

interface Predictions {
  [key: string]: Prediction;
}

export const PREDICTIONS: Predictions = {
  'Mrs Sherman': {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Turkey,
      4: Teams.Wales,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Russia,
      3: Teams.Denmark,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Austria,
      2: Teams.NorthMacedonia,
      3: Teams.Netherlands,
      4: Teams.Ukraine,
    },
    D: {
      1: Teams.Scotland,
      2: Teams.England,
      3: Teams.CzechRepublic,
      4: Teams.Croatia,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Slovakia,
      3: Teams.Sweden,
      4: Teams.Poland,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Hungary,
      4: Teams.Portugal,
    },
  },
  Christine: {
    A: {
      1: Teams.Italy,
      2: Teams.Wales,
      3: Teams.Turkey,
      4: Teams.Switzerland,
    },
    B: {
      1: Teams.Russia,
      2: Teams.Denmark,
      3: Teams.Finland,
      4: Teams.Belgium,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.Croatia,
      2: Teams.England,
      3: Teams.CzechRepublic,
      4: Teams.Scotland,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Sweden,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.Germany,
      2: Teams.France,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Michael: {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Wales,
      4: Teams.Turkey,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Finland,
      3: Teams.Russia,
      4: Teams.Denmark,
    },
    C: {
      1: Teams.Ukraine,
      2: Teams.NorthMacedonia,
      3: Teams.Netherlands,
      4: Teams.Austria,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Sweden,
      2: Teams.Spain,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Regina: {
    A: {
      1: Teams.Italy,
      2: Teams.Turkey,
      3: Teams.Wales,
      4: Teams.Switzerland,
    },
    B: {
      1: Teams.Finland,
      2: Teams.Belgium,
      3: Teams.Denmark,
      4: Teams.Russia,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.NorthMacedonia,
      3: Teams.Ukraine,
      4: Teams.Austria,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.CzechRepublic,
      4: Teams.Scotland,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Slovakia,
      3: Teams.Poland,
      4: Teams.Sweden,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Dominic: {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Wales,
      4: Teams.Switzerland,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Finland,
      4: Teams.Russia,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.Croatia,
      2: Teams.England,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Sweden,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.Germany,
      2: Teams.France,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  'Gabe Sherman': {
    A: {
      1: Teams.Italy,
      2: Teams.Wales,
      3: Teams.Turkey,
      4: Teams.Switzerland,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Russia,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.Croatia,
      2: Teams.England,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Sweden,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.Portugal,
      2: Teams.France,
      3: Teams.Germany,
      4: Teams.Hungary,
    },
  },
  Maria: {
    A: {
      1: Teams.Italy,
      2: Teams.Turkey,
      3: Teams.Switzerland,
      4: Teams.Wales,
    },
    B: {
      1: Teams.Denmark,
      2: Teams.Finland,
      3: Teams.Russia,
      4: Teams.Belgium,
    },
    C: {
      1: Teams.Ukraine,
      2: Teams.NorthMacedonia,
      3: Teams.Austria,
      4: Teams.Netherlands,
    },
    D: {
      1: Teams.CzechRepublic,
      2: Teams.England,
      3: Teams.Croatia,
      4: Teams.Scotland,
    },
    E: {
      1: Teams.Poland,
      2: Teams.Slovakia,
      3: Teams.Spain,
      4: Teams.Sweden,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Hungary,
      4: Teams.Portugal,
    },
  },
  Cece: {
    A: {
      1: Teams.Italy,
      2: Teams.Turkey,
      3: Teams.Wales,
      4: Teams.Switzerland,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Finland,
      4: Teams.Russia,
    },
    C: {
      1: Teams.Austria,
      2: Teams.Netherlands,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Scotland,
      3: Teams.Croatia,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Poland,
      2: Teams.Sweden,
      3: Teams.Spain,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Emma: {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Turkey,
      4: Teams.Wales,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Russia,
      3: Teams.Denmark,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Austria,
      2: Teams.Ukraine,
      3: Teams.NorthMacedonia,
      4: Teams.Netherlands,
    },
    D: {
      1: Teams.England,
      2: Teams.CzechRepublic,
      3: Teams.Croatia,
      4: Teams.Scotland,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Slovakia,
      3: Teams.Sweden,
      4: Teams.Poland,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Chris: {
    A: {
      1: Teams.Switzerland,
      2: Teams.Turkey,
      3: Teams.Wales,
      4: Teams.Italy,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Russia,
      3: Teams.Denmark,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Ukraine,
      2: Teams.Austria,
      3: Teams.Netherlands,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Poland,
      3: Teams.Sweden,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Tony: {
    A: {
      1: Teams.Italy,
      2: Teams.Wales,
      3: Teams.Turkey,
      4: Teams.Switzerland,
    },
    B: {
      1: Teams.Denmark,
      2: Teams.Finland,
      3: Teams.Belgium,
      4: Teams.Russia,
    },
    C: {
      1: Teams.NorthMacedonia,
      2: Teams.Netherlands,
      3: Teams.Austria,
      4: Teams.Ukraine,
    },
    D: {
      1: Teams.England,
      2: Teams.Scotland,
      3: Teams.Croatia,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Sweden,
      2: Teams.Spain,
      3: Teams.Slovakia,
      4: Teams.Poland,
    },
    F: {
      1: Teams.Germany,
      2: Teams.France,
      3: Teams.Hungary,
      4: Teams.Portugal,
    },
  },
  Kolbe: {
    A: {
      1: Teams.Italy,
      2: Teams.Wales,
      3: Teams.Switzerland,
      4: Teams.Turkey,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Russia,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Scotland,
      3: Teams.Croatia,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Poland,
      3: Teams.Sweden,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Portugal,
      3: Teams.Germany,
      4: Teams.Hungary,
    },
  },
  Jojo: {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Wales,
      4: Teams.Turkey,
    },
    B: {
      1: Teams.Denmark,
      2: Teams.Belgium,
      3: Teams.Finland,
      4: Teams.Russia,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Poland,
      3: Teams.Sweden,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Portugal,
      3: Teams.Germany,
      4: Teams.Hungary,
    },
  },
  Kwame: {
    A: {
      1: Teams.Italy,
      2: Teams.Turkey,
      3: Teams.Switzerland,
      4: Teams.Wales,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Russia,
      3: Teams.Denmark,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.CzechRepublic,
      4: Teams.Scotland,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Sweden,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Portugal,
      3: Teams.Germany,
      4: Teams.Hungary,
    },
  },
  'Gabe Lewis': {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Turkey,
      4: Teams.Wales,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Russia,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Ukraine,
      3: Teams.Austria,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Poland,
      3: Teams.Sweden,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Portugal,
      3: Teams.Germany,
      4: Teams.Hungary,
    },
  },
  Julius: {
    A: {
      1: Teams.Italy,
      2: Teams.Wales,
      3: Teams.Switzerland,
      4: Teams.Turkey,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Russia,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Austria,
      3: Teams.Ukraine,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Poland,
      3: Teams.Slovakia,
      4: Teams.Sweden,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
  Catlynn: {
    A: {
      1: Teams.Italy,
      2: Teams.Switzerland,
      3: Teams.Wales,
      4: Teams.Turkey,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Russia,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Ukraine,
      3: Teams.Austria,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.England,
      2: Teams.Croatia,
      3: Teams.Scotland,
      4: Teams.CzechRepublic,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Sweden,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Portugal,
      3: Teams.Germany,
      4: Teams.Hungary,
    },
  },
  'Mr Sherman': {
    A: {
      1: Teams.Italy,
      2: Teams.Turkey,
      3: Teams.Switzerland,
      4: Teams.Wales,
    },
    B: {
      1: Teams.Belgium,
      2: Teams.Denmark,
      3: Teams.Russia,
      4: Teams.Finland,
    },
    C: {
      1: Teams.Netherlands,
      2: Teams.Ukraine,
      3: Teams.Austria,
      4: Teams.NorthMacedonia,
    },
    D: {
      1: Teams.Croatia,
      2: Teams.England,
      3: Teams.CzechRepublic,
      4: Teams.Scotland,
    },
    E: {
      1: Teams.Spain,
      2: Teams.Sweden,
      3: Teams.Poland,
      4: Teams.Slovakia,
    },
    F: {
      1: Teams.France,
      2: Teams.Germany,
      3: Teams.Portugal,
      4: Teams.Hungary,
    },
  },
};
