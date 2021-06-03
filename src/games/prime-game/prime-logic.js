import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

const getIsPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gamePrime = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3;) {
    const expression = getRandomNumber(1, 100);

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getIsPrime(expression);

    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gamePrime;
