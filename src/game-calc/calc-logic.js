import readlineSync from 'readline-sync';
import { randomNum1 } from './randomNum1.js';
import { randomNum2 } from './randomNum2.js';
import randomSign from './randomOperator.js';
import rightAnswer from './rightAnswer.js';

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3;) {
    const a = randomNum1(1, 100);
    const b = randomNum2(1, 100);
    const operator = randomSign();

    const expression = `${a + operator + b}`;

    console.log(`Question: ${expression}`);

    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = rightAnswer(a, operator, b);

    if (answer === rightAnswer(a, operator, b)) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
