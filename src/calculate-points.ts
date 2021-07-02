import { FINALS, QUARTERFINALS, SEMIFINALS } from './knockout';
import { ROUND_OF_SIXTEEN } from 'knockout';
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

export const calculateGroupPoints = (
  prediction: Prediction,
  standings: Prediction
) => {
  const groupedPoints = {};

  console.log({ standings });
  Object.entries(prediction).forEach(([group, predictions]) => {
    const groupStandings = standings[group];

    let groupTotal = 0;

    if (groupStandings) {
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
    }

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

const getPointForMatch = (roundData, matchNumber, winner, score) => {
  if (roundData[matchNumber.toString()]) {
    const match = roundData[matchNumber.toString()];

    if (match.winner && match.winner === winner) {
      return score;
    }
  }

  return 0;
};

export const calculateKnockoutPoints = (predictions) => {
  let total = 0;

  if (predictions) {
    Object.entries(predictions).forEach(([matchNumber, winner]) => {
      total += getPointForMatch(ROUND_OF_SIXTEEN, matchNumber, winner, 10);
      total += getPointForMatch(QUARTERFINALS, matchNumber, winner, 15);
      total += getPointForMatch(SEMIFINALS, matchNumber, winner, 20);
      total += getPointForMatch(FINALS, matchNumber, winner, 30);
    });
  }

  return total;
};
