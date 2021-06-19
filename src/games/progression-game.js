import runGame from '../index.js';

const getRandom = (min = 0, max = 10) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

export default () => {
  const rule = 'What number is missing in the progression?';
  const gameOptions = () => {
    const start = getRandom();
    const cnt = getRandom(5, 10);
    const sizeProgression = getRandom(1, 10);
    const hiddenNumber = getRandom(1, cnt);
    let question = start;
    let temp = start;
    let rightAnswer = 0;
    for (let i = 1; i <= cnt; i += 1) {
      temp += sizeProgression;
      if (i === hiddenNumber) {
        question = `${question} ..`;
        rightAnswer = String(temp);
      } else {
        question = `${question} ${temp}`;
      }
    }
    return { question, rightAnswer };
  };
  runGame(gameOptions, rule);
};
