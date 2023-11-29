import React from 'react';
import Dice from './Dice';
import LuckyN from './LuckyN';

const App = () => {
  return (
    <>
      <LuckyN />
      <LuckyN numDaus={2} suma={10} />
    </>
  );
};

export default App;
