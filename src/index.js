import readlineSync from 'readline-sync';

const showStartGreeting = () => {
  console.log('Welcome to the Brain Games');
};

const showGameDescription = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const askUserName = () => {
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const greet = () => {
  showStartGreeting();
  greetUser(askUserName());
};

const createQuestion = () => {
  const questionNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${questionNumber}`);
  return questionNumber;
};

const createAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const run = (neededAnswerCount, currentAnswerCount, name) => {
  if (neededAnswerCount === currentAnswerCount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const questionNumber = createQuestion();
  const answer = createAnswer();
  if (isEven(questionNumber) === answer) {
    console.log('Correct');
    run(neededAnswerCount, currentAnswerCount + 1, name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(questionNumber)}'`);
    console.log(`Let's try again, ${name}!`);
  }
};

const play = () => {
  showStartGreeting();
  showGameDescription();
  const userName = askUserName();
  greetUser(userName);
  console.log();

  const neededRightAnswersCount = 3;
  const currentRightAnswersCount = 0;
  run(neededRightAnswersCount, currentRightAnswersCount, userName);
};

export { play, greet };
