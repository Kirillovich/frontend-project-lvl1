import { engine, countRound } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

const brainGcd = () => {
  const question = [];
  const correctAnswer = [];

  for (let i = 0; i < countRound; i += 1) {
    const num1 = randomInteger(0, 50);
    const num2 = randomInteger(0, 50);
    question.push(`${num1} ${num2}`);

    correctAnswer.push((gcd(num1, num2)).toString());
  }

  return [question, correctAnswer];
};

const data = brainGcd();

engine(rules, data);

export default brainGcd;
