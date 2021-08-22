import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const ONE = Big(numberOne);
  const TWO = Big(numberTwo);

  if (operation === '+') {
    return ONE.plus(TWO).toString();
  } if (operation === '-') {
    return ONE.minus(TWO).toString();
  } if (operation === '÷' && !(TWO > -1 && TWO < 1)) {
    return ONE.div(TWO).toString();
  } if (operation === 'X') {
    return ONE.times(TWO).toString();
  } if (operation === '%' && !(TWO > -1 && TWO < 1)) {
    return ONE.mod(TWO).toString();
  }
  return ('Error');
};

export default operate;
