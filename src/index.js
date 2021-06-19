import readlineSync from 'readline-sync';

export default (gameOptions, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  let rightUserAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = gameOptions();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      rightUserAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (rightUserAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  return false;
};
