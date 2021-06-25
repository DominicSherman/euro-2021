import {
  FINALS,
  MatchType,
  QUARTERFINALS,
  ROUND_OF_SIXTEEN,
  RoundType,
  SEMIFINALS,
} from 'knockout';
import { Teams } from 'predictions';
import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-full flex flex-col items-center w-full py-8">
        <Matches />
      </div>
    </div>
  );
}

const Matches = () => {
  const [round, setRound] = useState(0);

  if (round === 0) {
    return (
      <>
        <Round round={ROUND_OF_SIXTEEN} title={'Round of Sixteen'} />
        <button onClick={() => setRound(round + 1)}>Next</button>
      </>
    );
  }

  if (round === 1) {
    return (
      <>
        <Round
          prevRound={ROUND_OF_SIXTEEN}
          round={QUARTERFINALS}
          title={'Quarterfinals'}
        />
        <button onClick={() => setRound(round + 1)}>Next</button>
        <button onClick={() => setRound(round - 1)}>Back</button>
      </>
    );
  }

  if (round === 2) {
    return (
      <>
        <Round
          prevRound={QUARTERFINALS}
          round={SEMIFINALS}
          title={'Semifinals'}
        />
        <button onClick={() => setRound(round + 1)}>Next</button>
        <button onClick={() => setRound(round - 1)}>Back</button>
      </>
    );
  }

  if (round === 3) {
    return (
      <>
        <Round prevRound={SEMIFINALS} round={FINALS} title={'Finals'} />
        <button onClick={() => setRound(round + 1)}>Next</button>
        <button onClick={() => setRound(round - 1)}>Back</button>
      </>
    );
  }

  return null;
};

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
  const homeTeam = getTeam(match.home, prevRound);
  const awayTeam = getTeam(match.away, prevRound);

  return (
    <div className="flex flex-row">
      <span>{matchNumber}.</span>
      <div>
        <input
          name={matchNumber}
          onChange={setWinner(matchNumber, Teams[homeTeam])}
          type="radio"
          value={0}
        />
        {homeTeam}
        <input
          name={matchNumber}
          onChange={setWinner(matchNumber, Teams[awayTeam])}
          type="radio"
          value={0}
        />
        {awayTeam}
      </div>
      {/* <span className="ml-1">{getTeam(match.home, prevRound)}</span>
      <span className="ml-1"> - </span>
      <span className="ml-1">{getTeam(match.away, prevRound)}</span> */}
    </div>
  );
};

function setWinner(num: string, winner: Teams) {
  if (Number(num) < 9) {
    ROUND_OF_SIXTEEN[num].winner = winner;
  } else if (Number(num) < 13) {
    QUARTERFINALS[num].winner = winner;
  } else if (Number(num) < 15) {
    SEMIFINALS[num].winner = winner;
  } else FINALS[num].winner = winner;

  return undefined;
}
