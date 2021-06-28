import { NAMES } from 'predictions';
import React, { useEffect } from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { Check, X } from 'react-feather';
import {
  ROUND_OF_SIXTEEN,
  QUARTERFINALS,
  SEMIFINALS,
  FINALS,
  RoundType,
  MatchType,
} from 'knockout';
import { NavBar } from 'components';
import { calculateKnockoutPoints } from 'calculate-points';

export default function Knockouts() {
  const [selections, setSelections] = useState<any | null>(null);
  const [name, setName] = useState<{ value: string } | null>(null);

  useEffect(() => {
    const setData = async () => {
      const mappedSelections = {};

      NAMES.forEach(async (name) => {
        const data = await import(`../../knockout-predictions/${name}.json`);

        mappedSelections[name] = data;
      });

      setSelections(mappedSelections);
    };

    setData();
  }, [setSelections]);

  if (!selections) {
    return null;
  }

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-full flex flex-col items-center w-full py-8">
        <NavBar />
        <h1 className="text-3xl font-semibold ml-7">{`Knockouts`}</h1>
        <div className="w-[200px] mt-2">
          <Select
            onChange={(prop) => {
              setName(prop);
            }}
            options={[
              {
                value: null,
                label: 'Current Results',
              },
              ...NAMES.map((name) => ({
                value: name,
                label: name,
              })),
            ]}
            value={name}
          />
        </div>
        {name?.value && selections && (
          <div className="mt-8">
            <p className="text-2xl font-extrabold text-green-600">{`${calculateKnockoutPoints(
              selections[name.value]
            )} points`}</p>
          </div>
        )}
        <div className="mt-8">
          <Matches selections={name ? selections[name.value] : undefined} />
        </div>
      </div>
    </div>
  );
}

const Matches = ({ selections }: { selections?: any }) => (
  <>
    <Round
      round={ROUND_OF_SIXTEEN}
      selections={selections}
      title={'Round of Sixteen'}
    />
    <Round
      prevRound={ROUND_OF_SIXTEEN}
      round={QUARTERFINALS}
      selections={selections}
      title={'Quarterfinals'}
    />
    <Round
      prevRound={QUARTERFINALS}
      round={SEMIFINALS}
      selections={selections}
      title={'Semifinals'}
    />
    <Round
      prevRound={SEMIFINALS}
      round={FINALS}
      selections={selections}
      title={'Finals'}
    />
  </>
);

interface RoundProps {
  round: RoundType;
  prevRound?: RoundType;
  title: string;
  selections?: any;
}

const Round = ({ round, prevRound, title, selections }: RoundProps) => (
  <div className="py-8">
    <h1 className="text-3xl font-semibold ml-7">{title}</h1>
    <div className="mt-4">
      {Object.entries(round).map(([matchNumber, match]) => (
        <Match
          match={match}
          matchNumber={matchNumber}
          prevRound={prevRound}
          selections={selections}
        />
      ))}
    </div>
  </div>
);

interface MatchProps {
  match: MatchType;
  matchNumber: string;
  prevRound?: RoundType;
  selections?: any;
}

const getTeam = (
  team: string | number,
  prevRound?: RoundType,
  selections?: any
) => {
  if (typeof team === 'string') {
    return team;
  }

  if (selections) {
    const selectedTeam = selections[team];

    return selectedTeam;
  }

  if (prevRound) {
    const match = prevRound[team.toString()];

    return match.winner || `Winner of game ${team}`;
  }

  return 'undefined';
};

const Match = ({ match, prevRound, matchNumber, selections }: MatchProps) => {
  const selectedWinner = selections ? selections[matchNumber] : null;
  const homeTeam = getTeam(match.home, prevRound, selections);
  const awayTeam = getTeam(match.away, prevRound, selections);

  return (
    <div className="flex flex-row">
      <span>{matchNumber}.</span>
      <span
        className={`ml-1 ${
          (!selectedWinner && selectedWinner === homeTeam) ||
          match.winner === homeTeam
            ? 'font-extrabold'
            : ''
        }`}
      >
        {homeTeam}
      </span>
      <span className="ml-1"> - </span>
      <span
        className={`ml-1 ${
          (!selectedWinner && selectedWinner === awayTeam) ||
          match.winner === awayTeam
            ? 'font-extrabold'
            : ''
        }`}
      >
        {awayTeam}
      </span>
      {match.winner && selectedWinner && (
        <span className="ml-2">
          {selectedWinner === match.winner ? (
            <Check color="#4BB543" />
          ) : (
            <X color="#ff0033" />
          )}
        </span>
      )}
    </div>
  );
};
