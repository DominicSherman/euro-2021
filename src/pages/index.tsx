import {
  FINALS,
  MatchType,
  QUARTERFINALS,
  ROUND_OF_SIXTEEN,
  RoundType,
  SEMIFINALS,
} from 'knockout';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <Link href="/create-prediction">
        <button className="py-2 px-4 bg-gradient-to-br from-gray-800 to-gray-600 border border-cyan-700 hover:border-white text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all">
          Add Knockout Predictions
        </button>
      </Link>
      <div className="h-full flex flex-col items-center w-full py-8">
        <Matches />
      </div>
    </div>
  );
}

const Matches = () => (
  <>
    <Round round={ROUND_OF_SIXTEEN} title={'Round of Sixteen'} />
    <Round
      prevRound={ROUND_OF_SIXTEEN}
      round={QUARTERFINALS}
      title={'Quarterfinals'}
    />
    <Round prevRound={QUARTERFINALS} round={SEMIFINALS} title={'Semifinals'} />
    <Round prevRound={SEMIFINALS} round={FINALS} title={'Finals'} />
  </>
);

interface RoundProps {
  round: RoundType;
  prevRound?: RoundType;
  title: string;
}

const Round = ({ round, prevRound, title }: RoundProps) => (
  <div className="py-8">
    <h1 className="text-3xl font-semibold ml-7">{title}</h1>
    <div className="mt-4">
      {Object.entries(round).map(([matchNumber, match]) => (
        <Match match={match} matchNumber={matchNumber} prevRound={prevRound} />
      ))}
    </div>
  </div>
);

interface MatchProps {
  match: MatchType;
  matchNumber: string;
  prevRound?: RoundType;
}

const getTeam = (team: string | number, prevRound?: RoundType) => {
  if (typeof team === 'string') {
    return team;
  }

  if (prevRound) {
    const match = prevRound[team.toString()];

    return match.winner || `Winner of game ${team}`;
  }

  return 'undefined';
};

const Match = ({ match, prevRound, matchNumber }: MatchProps) => {
  return (
    <div className="flex flex-row">
      <span>{matchNumber}.</span>
      <span className="ml-1">{getTeam(match.home, prevRound)}</span>
      <span className="ml-1"> - </span>
      <span className="ml-1">{getTeam(match.away, prevRound)}</span>
    </div>
  );
};
