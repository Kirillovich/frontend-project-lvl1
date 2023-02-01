import readlineSync from 'readline-sync';

const engine = (rules, data) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  let count = 0;
  const countRound = 3;

  do {
    const question = data[0];
    const correctAnswer = data[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  } while (count < countRound);

  return console.log(`Congratulations, ${name}!`);
};

export default engine;
