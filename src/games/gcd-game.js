import runGame from '../index.js';

const getRandom = (min = 0, max = 10) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const gameOptions = () => {
    const firstNumber = getRandom(1, 99);
    const secondNumber = getRandom(1, 99);
    const question = `${firstNumber} ${secondNumber}`;
    let rightAnswer = '1';
    for (let i = 2; i <= firstNumber && i <= secondNumber; i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        rightAnswer = String(i);
      }
    }
    return { question, rightAnswer };
  };
  runGame(gameOptions, rule);
};
