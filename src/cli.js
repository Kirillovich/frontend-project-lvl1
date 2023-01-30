import readlineSync from 'readline-sync';

const questionName = () => {
   const name = readlineSync.question('May I have your name? ')
   return `Hello, ${name}!`;
}

export default questionName;