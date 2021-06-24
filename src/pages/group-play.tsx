import { calculatePoints } from 'calculate-points';
import { Prediction, PREDICTIONS } from 'predictions';
import React from 'react';

// import testData from 'test-data.json';

export default function GroupPlay({ standingsData }) {
  const predictionsWithPoints = Object.keys(PREDICTIONS).map((name) => {
    const prediction = PREDICTIONS[name];

    const points = calculatePoints(prediction, standingsData);

    return {
      name,
      prediction,
      points,
    };
  });

  const sortedPredictionsWithPoints = predictionsWithPoints.sort(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (a, b) => b.points.total - a.points.total
  );

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-full flex flex-col items-center w-full py-8">
        <h1 className="text-3xl font-semibold ml-7">{`Euro 2021 Bracket Standings`}</h1>
        <PredictionGroup name="Standings" prediction={standingsData} />
        <div className="h-[2px] w-full max-w-[600px] bg-gray-400 my-4 rounded-md" />
        {sortedPredictionsWithPoints.map((item) => (
          <PredictionGroup
            name={item.name}
            points={item.points}
            prediction={item.prediction}
          />
        ))}
      </div>
    </div>
  );
}

const PredictionGroup = ({
  prediction,
  name,
  points,
}: {
  prediction: Prediction;
  name: string;
  points?: any;
}) => {
  return (
    <div className="grid grid-flow-row grid-cols-3 my-2 gap-4 border rounded-md p-4 shadow-md w-full max-w-[600px]">
      <div className="col-span-3 mb-4 flex flex-row justify-between items-center">
        <p className="text-2xl font-bold">{name}</p>
        {points && (
          <p className="text-2xl font-extrabold text-green-600">{`${points.total} points`}</p>
        )}
      </div>
      {Object.entries(prediction).map(([groupName, predictions]) => {
        return (
          <div>
            <p className="text-lg font-bold">{`Group ${groupName}${
              points ? ` (${points[groupName]})` : ''
            }`}</p>
            {Object.entries(predictions).map(([rank, team]) => {
              return <p>{`${rank}. ${team}`}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

function numToSSColumn(num) {
  let s = '',
    t;

  while (num > 0) {
    t = (num - 1) % 26;
    s = String.fromCharCode(65 + t) + s;
    num = ((num - t) / 26) | 0;
  }

  return s || '';
}

export const getServerSideProps = async () => {
  // const standingsData = testData;

  const response = await fetch(
    'https://api-football-v1.p.rapidapi.com/v3/standings?league=4&season=2020',
    {
      headers: {
        'x-rapidapi-key': process.env.API_KEY || '',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      },
    }
  );

  const standingsData = await response.json();

  const standings = standingsData.response[0].league.standings;

  standings.pop();

  const mappedStandingsData = standings.reduce((accum, group, index) => {
    const groupName = numToSSColumn(index + 1);

    const groupStandings = group.reduce(
      (accum2, team) => ({
        ...accum2,
        [team.rank]: team.team.name,
      }),
      {}
    );

    return {
      ...accum,
      [groupName]: groupStandings,
    };
  }, {});

  return {
    props: {
      standingsData: mappedStandingsData,
    },
  };
};
