import readlineSync from 'readline-sync';
import getRandomNum from '../random.js';
import rightAnswer from './rightAnswer.js';

const gameNod = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3;) {
    const a = getRandomNum(1, 100);
    const b = getRandomNum(1, 100);
    

    const expression = `${a + " " + b}`;

    console.log(`Question: ${expression}`);

    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = rightAnswer(a,b);

    if (answer === rightAnswer(a,b)) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameNod;