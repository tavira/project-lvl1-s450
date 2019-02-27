import readlineSync from 'readline-sync';

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

const createQuestion = () => {
  const maxRandomNumber = 100;
  const question = Math.floor(Math.random() * maxRandomNumber);
  console.log(`Question: ${question}`);
  return question;
};

const createAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const run = (neededAnswerCount, currentAnswerCount, name) => {
  if (neededAnswerCount === currentAnswerCount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const question = createQuestion();
  const answer = createAnswer();
  const isEven = num => (num % 2 === 0);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  if (rightAnswer === answer) {
    console.log('Correct!');
    run(neededAnswerCount, currentAnswerCount + 1, name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${name}!`);
  }
};

const play = (neededRightAnswersCount) => {
  console.log('Welcome to the Brain Games');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = askUserName();
  greetUser(userName);
  console.log();

  run(neededRightAnswersCount, 0, userName);
};

export { play, greet };
