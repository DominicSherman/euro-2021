import { NavBar } from 'components';
import React, { useEffect, useState } from 'react';
import groupPlay from 'group-play.json';
import { NAMES, PREDICTIONS } from 'predictions';
import {
  calculateGroupPoints,
  calculateKnockoutPoints,
} from 'calculate-points';

export default function Home({ standingsData }) {
  const [scoring, setScoring] = useState<any | null>(null);

  useEffect(() => {
    const setData = async () => {
      const groupPoints = Object.keys(PREDICTIONS).map((name) => {
        const prediction = PREDICTIONS[name];

        const points = calculateGroupPoints(prediction, standingsData);

        return {
          name,
          groupTotal: points.total,
        };
      });

      let points: any = [];

      for (let i = 0; i < NAMES.length; i++) {
        const name = NAMES[i];

        const data = await import(`../../knockout-predictions/${name}.json`);
        const knockoutPoints = calculateKnockoutPoints(data);
        const groupPointItem = groupPoints.find((item) => item.name === name);

        if (groupPointItem) {
          points = [
            ...points,
            {
              ...groupPointItem,
              knockoutTotal: knockoutPoints,
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              total: knockoutPoints + groupPointItem.groupTotal,
            },
          ];
        }
      }

      const sortedPoints = points.sort((a, b) => b.total - a.total);

      setScoring(sortedPoints);
    };

    setData();
  }, [setScoring, standingsData]);

  if (!scoring) {
    return null;
  }

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-full flex flex-col items-center w-full py-8">
        <NavBar />
        <h1 className="text-3xl font-semibold ml-7 mb-4">{`Standings`}</h1>
        <div className="grid grid-flow-row grid-cols-5 w-full max-w-xl mb-5 text-sm md:text-lg">
          <span className="flex flex-row justify-center font-extrabold">
            Rank
          </span>
          <span className="flex flex-row justify-center font-extrabold">
            Name
          </span>
          <span className="flex flex-row justify-center font-extrabold">
            Group
          </span>
          <span className="flex flex-row justify-center font-extrabold">
            Knockout
          </span>
          <span className="flex flex-row justify-center font-extrabold">
            Total
          </span>
        </div>
        {scoring.map((item, index) => (
          <div className="grid grid-flow-row grid-cols-5 w-full max-w-xl text-sm md:text-lg">
            <span className="flex flex-row justify-center">{index + 1}.</span>
            <span className="flex flex-row justify-center">{item.name}</span>
            <span className="flex flex-row justify-center">
              {item.groupTotal}
            </span>
            <span className="flex flex-row justify-center">
              {item.knockoutTotal}
            </span>
            <span className="flex flex-row justify-center">{item.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  const standingsData = groupPlay;

  const standings = [...standingsData.response[0].league.standings];

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
