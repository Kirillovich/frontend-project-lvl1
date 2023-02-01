import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const question = (Math.random() * 100).toFixed();
  let correctAnswer = '';

  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const data = brainEven();

engine(rules, data);

export default brainEven;
