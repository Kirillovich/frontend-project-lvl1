import { engine, countRound } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const brainPrime = () => {
  const question = [];
  const correctAnswer = [];

  for (let i = 0; i < countRound; i += 1) {
    const num = randomInteger(1, 10);

    if (isPrime(num)) {
      correctAnswer.push('yes');
    } else {
      correctAnswer.push('no');
    }

    question.push(num.toString());
  }

  console.log(question);
  console.log(correctAnswer);

  return [question, correctAnswer];
};

const data = brainPrime();

engine(rules, data);

export default brainPrime;
