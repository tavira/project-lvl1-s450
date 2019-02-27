import readlineSync from 'readline-sync';
import { run as runCalc, showDescription as showDescriptionCalc } from './games/calc';
import { run as runEven, showDescription as showDescriptionEven } from './games/even';

const askUserName = () => {
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const greet = () => {
  console.log('Welcome to the Brain Games');
  greetUser(askUserName());
};

const play = (neededRightAnswersCount, gameType) => {
  console.log('Welcome to the Brain Games');
  if (gameType === 'even') {
    showDescriptionEven();
  }
  if (gameType === 'calc') {
    showDescriptionCalc();
  }
  const userName = askUserName();
  greetUser(userName);
  console.log();

  if (gameType === 'even') {
    runEven(neededRightAnswersCount, 0, userName);
  }
  if (gameType === 'calc') {
    runCalc(neededRightAnswersCount, 0, userName);
  }
};

export { play, greet };
