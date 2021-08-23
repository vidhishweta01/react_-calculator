import React, { useState } from 'react';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';

const App = () => {
  const [{ total, next, operation }, setObj] = useState({ total: '', next: '', operation: '' });

  const handleClick = (buttonName) => {
    const res = calculate({ total, next, operation }, buttonName);
    console.log(res);
    setObj({ total: res.total, next: res.next, operation: res.operation });
  };

  return (
    <>
      <Display total={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
