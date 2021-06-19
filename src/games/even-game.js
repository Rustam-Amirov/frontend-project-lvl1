import runGame from '../index.js';
import getRandom from './getRandom.js';

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
