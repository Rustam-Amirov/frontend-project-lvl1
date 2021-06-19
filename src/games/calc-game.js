import runGame from '../index.js';
import getRandom from './getRandom.js';

const getRightAnswer = (firstNumber, secondNumber, sign) => {
  let answer = 0;
  switch (sign) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      throw new Error("It's a mistake");
  }
  return String(answer);
};

export default () => {
  const rule = 'What is the result of the expression?';
  const gameOptions = () => {
    const firstNumber = getRandom(0, 99);
    const secondNumber = getRandom(0, 99);
    const signs = ['+', '-', '*'];
    const sign = signs[Math.floor(Math.random() * signs.length)];
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const rightAnswer = getRightAnswer(firstNumber, secondNumber, sign);
    return { question, rightAnswer };
  };
  runGame(gameOptions, rule);
};
