import runGame from '../index.js';
import getRandom from './getRandom.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameOptions = () => {
    const question = getRandom(1, 100);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  runGame(gameOptions, rule);
};
