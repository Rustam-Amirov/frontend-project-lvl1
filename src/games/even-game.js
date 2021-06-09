import readlineSync from 'readline-sync';
import sayHello from '../cli.js';

export default () => {
    const userName = sayHello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let rightUserAnswer = 0;
    for(let i = 0; i < 3; i += 1) {
        const question = getRandom();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(question) ? 'yes' : 'no';
        if (answer === correctAnswer) {
            console.log('Correct!');
            rightUserAnswer += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    }
    if (rightUserAnswer === 3) { 
        console.log(`Congratulations, ${userName}`);
    }
};

function getRandom(min = 0, max = 10) {
    const ceilMin = Math.ceil(min);
    const floorMax = Math.floor(max);
    return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
}

function isEven(num) {
    return num % 2 === 0 ? true : false;
}