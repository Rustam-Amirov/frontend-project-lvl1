import runGame from '../index.js';

const getRandom = (min = 0, max = 10) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

const isEven = (num) => (num % 2) === 0;

export default () => {
  const rule = 'Answer "yes" if the number is even, other wise answer "no"';
  const gameoptions = () => {
    const question = getRandom();
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  runGame(gameoptions, rule);
};
