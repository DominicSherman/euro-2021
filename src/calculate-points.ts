import { Prediction } from 'predictions';

const rightTeamRightPlace = (rank, team, groupStandings) => {
  if (groupStandings[rank] === team) {
    return true;
  }

  return false;
};

const rightTeamWrongPlace = (rank, team, groupStandings) => {
  if (rank === '1' && groupStandings[2] === team) {
    return true;
  } else if (
    rank === '2' &&
    (groupStandings[1] === team || groupStandings[3] === team)
  ) {
    return true;
  } else if (rank === '3' && groupStandings[2] === team) {
    return true;
  }

  return false;
};

export const calculatePoints = (
  prediction: Prediction,
  standings: Prediction
) => {
  const groupedPoints = {};

  Object.entries(prediction).forEach(([group, predictions]) => {
    const groupStandings = standings[group];

    let groupTotal = 0;

    Object.entries(predictions).forEach(([rank, team], index) => {
      // do not check for 4th place
      if (index !== 3) {
        if (rightTeamRightPlace(rank, team, groupStandings)) {
          groupTotal = groupTotal + 6;
        } else if (rightTeamWrongPlace(rank, team, groupStandings)) {
          groupTotal = groupTotal + 3;
        }
      }
    });

    groupedPoints[group] = groupTotal;
  });

  const total = Object.values(groupedPoints).reduce(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (count, val) => count + val,
    0
  );

  return {
    ...groupedPoints,
    total,
  };
};
