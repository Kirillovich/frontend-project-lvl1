import { engine, countRound } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const question = [];
  const correctAnswer = [];

  for (let i = 0; i < countRound; i += 1) {
    question.push((Math.random() * 100).toFixed());

    if (question[i] % 2 === 0) {
      correctAnswer.push('yes');
    } else {
      correctAnswer.push('no');
    }
  }

  return [question, correctAnswer];
};

const data = brainEven();

engine(rules, data);

export default brainEven;
