#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const nameUser = welcome();

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  do {
    const number = (Math.random() * 100).toFixed();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (answer !== 'yes') {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${nameUser}!`);
      }
      if (answer === 'yes') {
        console.log('Correct!');
        correctAnswers += 1;
      }
    } else {
      if (answer !== 'no') {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameUser}!`);
      }
      if (answer === 'no') {
        console.log('Correct!');
        correctAnswers += 1;
      }
    }
  } while (correctAnswers < 3);

  return console.log(`Congratulations, ${nameUser}!`);
};

game();
