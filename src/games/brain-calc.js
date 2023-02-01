import { engine, countRound } from '../index.js';

const rules = 'What is the result of the expression?';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const brainCalc = () => {
  const question = [];
  const correctAnswer = [];
  const operation = ['+', '-', '*'];

  for (let i = 0; i < countRound; i += 1) {
    const num1 = randomInteger(0, 50);
    const num2 = randomInteger(0, 50);
    const randomPositionOperator = randomInteger(0, operation.length - 1);
    question.push(`${num1} ${operation[randomPositionOperator]} ${num2}`);

    if (question[i].indexOf('+') !== -1) {
      correctAnswer.push((num1 + num2).toString());
    } else if (question[i].indexOf('-') !== -1) {
      correctAnswer.push((num1 - num2).toString());
    } else if (question[i].indexOf('*') !== -1) {
      correctAnswer.push((num1 * num2).toString());
    }
  }

  return [question, correctAnswer];
};

const data = brainCalc();

engine(rules, data);

export default brainCalc;
