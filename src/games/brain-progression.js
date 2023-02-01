import { engine, countRound } from '../index.js';

const rules = 'What number is missing in the progression?';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const functionProgression = (start, step, n) => {
  const result = [];
  const randomLengthProgression = randomInteger(n[0], n[1]);

  for (let i = 0; i < randomLengthProgression; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

const brainProgression = () => {
  const question = [];
  const correctAnswer = [];

  for (let i = 0; i < countRound; i += 1) {
    const start = randomInteger(1, 20);
    const step = randomInteger(2, 7);
    const randomLengthProgression = [5, 10];

    const progression = functionProgression(start, step, randomLengthProgression);
    const lengthProgression = progression.length;
    const hideNumber = randomInteger(0, lengthProgression - 1);
    const progressionWithHideNumber = [];

    for (let j = 0; j < lengthProgression; j += 1) {
      if (j === hideNumber) {
        progressionWithHideNumber.push('..');
        correctAnswer.push(progression[j].toString());
      } else {
        progressionWithHideNumber.push(progression[j]);
      }
    }

    question.push(progressionWithHideNumber.join(' '));
  }

  return [question, correctAnswer];
};

const data = brainProgression();

engine(rules, data);

export default brainProgression;
