import {
  FINALS,
  MatchType,
  QUARTERFINALS,
  ROUND_OF_SIXTEEN,
  RoundType,
  SEMIFINALS,
} from 'knockout';
import React from 'react';

export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-full flex flex-col items-center w-full py-8">
        <Round round={ROUND_OF_SIXTEEN} />
        <Round prevRound={ROUND_OF_SIXTEEN} round={QUARTERFINALS} />
        <Round prevRound={QUARTERFINALS} round={SEMIFINALS} />
        <Round prevRound={SEMIFINALS} round={FINALS} />
      </div>
    </div>
  );
}

interface RoundProps {
  round: RoundType;
  prevRound?: RoundType;
}

const Round = ({ round, prevRound }: RoundProps) => (
  <div className="py-8">
    <h1 className="text-3xl font-semibold ml-7">{`Round of 16`}</h1>
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
