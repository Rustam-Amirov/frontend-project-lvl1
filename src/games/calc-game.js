import runGame from '../index.js';

const getRandom = (min = 0, max = 10) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

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
