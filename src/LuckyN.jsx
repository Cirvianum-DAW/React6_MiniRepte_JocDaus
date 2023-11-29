import React from 'react';
import { useState } from 'react';
import { getTirades, sum } from './utils';
import Dice from './Dice';

const LuckyN = ({ numDaus = 3, suma = 7 }) => {
  const [dice, setDice] = useState(getTirades(numDaus));

  const isWinner = sum(dice) === suma;

  const handleClick = () => {
    setDice(getTirades(numDaus));
  };

  return (
    <main>
      <h1 className="mt-3 text-center text-xl text-blue-500">
        Prova Sort! La suma ha de donar {suma}!
      </h1>
      {isWinner ? <p className="text-center text-2xl">Has guanyat!</p> : null}
      <Dice dice={dice} />
      <button
        className="mx-auto mt-3 block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        Tirar daus
      </button>
    </main>
  );
};

export default LuckyN;
