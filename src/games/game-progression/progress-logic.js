import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

const isProgression = (firstNumArray, stepNumArray, lengthArray) => {
  const arr = [];
  let count = 0;
  while (lengthArray > count) {
    arr.push(firstNumArray + count * stepNumArray);
    count += 1;
  }
  return arr;
};

const gameProgress = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hi, ${name}!`);

  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3;) {
    const firstNumArray = getRandomNumber(0, 9);
    const stepNumArray = getRandomNumber(1, 5);

    const arr = isProgression(firstNumArray, stepNumArray, 10);
    const randomLocationSign = getRandomNumber(0, arr.length - 1);
    arr.splice(randomLocationSign, 1, '..');
    const arrayProgression = arr.join(' ');
    console.log(`Question: ${arrayProgression}`);

    const correctValue = firstNumArray + randomLocationSign * stepNumArray;
    
    const answer = (readlineSync.question('Your answer: '));
    
    const correctAnswer = String(correctValue);

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

export default gameProgress;



 

