import {
  FINALS,
  MatchType,
  QUARTERFINALS,
  ROUND_OF_SIXTEEN,
  RoundType,
  SEMIFINALS,
} from 'knockout';
import { NAMES } from 'predictions';
import React, { useState } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';

export default function CreatePrediction() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-full flex flex-col items-center w-full py-8">
        <Matches />
      </div>
    </div>
  );
}

const Matches = () => {
  const [selections, setSelections] = useState({
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,
    '12': null,
    '13': null,
    '14': null,
    '15': null,
  });

  const router = useRouter();

  const [name, setName] = useState<{ value: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (name) {
      setLoading(true);

      await fetch('api/submit', {
        body: JSON.stringify({
          content: Buffer.from(JSON.stringify(selections)).toString('base64'),
          name: name.value,
        }),
        method: 'PUT',
      });

      await router.push('/');
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[200px]">
        <Select
          onChange={(prop) => {
            setName(prop);
          }}
          options={NAMES.map((name) => ({
            value: name,
            label: name,
          }))}
          value={name}
        />
      </div>
      <Round
        round={ROUND_OF_SIXTEEN}
        selections={selections}
        setSelections={setSelections}
        title={'Round of Sixteen'}
      />
      <Round
        round={QUARTERFINALS}
        selections={selections}
        setSelections={setSelections}
        title={'Quarterfinals'}
      />
      <Round
        round={SEMIFINALS}
        selections={selections}
        setSelections={setSelections}
        title={'Semifinals'}
      />
      <Round
        round={FINALS}
        selections={selections}
        setSelections={setSelections}
        title={'Finals'}
      />
      <button
        className={`py-2 px-4 bg-gradient-to-br from-gray-800 to-gray-600 border border-cyan-700 hover:border-white text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all ${
          loading ? 'opacity-50' : ''
        }`}
        onClick={onSubmit}
      >
        Submit
      </button>
    </>
  );
};

interface RoundProps {
  round: RoundType;
  prevRound?: RoundType;
  title: string;
  selections: any;
  setSelections: (param: any) => void;
}

const Round = ({
  round,
  prevRound,
  title,
  selections,
  setSelections,
}: RoundProps) => (
  <div className="py-8">
    <h1 className="text-3xl font-semibold ml-7">{title}</h1>
    <div className="mt-4">
      {Object.entries(round).map(([matchNumber, match]) => (
        <Match
          match={match}
          matchNumber={matchNumber}
          prevRound={prevRound}
          selections={selections}
          setSelections={setSelections}
        />
      ))}
    </div>
  </div>
);

interface MatchProps {
  match: MatchType;
  matchNumber: string;
  prevRound?: RoundType;
  selections: any;
  setSelections: (param: any) => void;
}

const getTeam = (team: string | number, selections?: any) => {
  if (typeof team === 'string') {
    return team;
  }

  if (selections) {
    const winner = selections[team.toString()];

    return winner || `G${team}`;
  }

  return 'undefined';
};

const Match = ({
  match,
  matchNumber,
  selections,
  setSelections,
}: MatchProps) => {
  const homeTeam = getTeam(match.home, selections);
  const awayTeam = getTeam(match.away, selections);

  return (
    <div className="flex flex-row items-center">
      <span className="w-[25px]">{matchNumber}.</span>
      <div className="ml-2 flex flex-row items-center">
        <div className="w-[150px] flex flex-row items-center">
          <input
            checked={selections[matchNumber] === homeTeam}
            className="mr-1"
            name={matchNumber}
            onChange={() => {
              setSelections({
                ...selections,
                [matchNumber]: homeTeam,
              });
            }}
            type="radio"
          />
          {homeTeam}
        </div>
        <div className="w-[150px] flex flex-row items-center">
          <input
            checked={selections[matchNumber] === awayTeam}
            className="mr-1"
            name={matchNumber}
            onChange={() => {
              setSelections({
                ...selections,
                [matchNumber]: awayTeam,
              });
            }}
            type="radio"
          />
          {awayTeam}
        </div>
      </div>
    </div>
  );
};
