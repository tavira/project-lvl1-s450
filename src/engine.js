import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const runGame = (descriptionGame, createQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games');
  console.log(descriptionGame);
  console.log();
  const userName = askUserName();
  greetUser(userName);
  console.log();

  const neededAnswerCount = 3;
  const currentAnswerCount = 0;

  const runGameStage = (rightAnswerCount) => {
    if (neededAnswerCount === rightAnswerCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionAnswerPair = createQuestionAnswerPair();
    const question = car(questionAnswerPair);
    const rightAnswer = cdr(questionAnswerPair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      runGameStage(rightAnswerCount + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  runGameStage(currentAnswerCount);
};

export default runGame;
