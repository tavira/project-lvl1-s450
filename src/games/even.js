import readlineSync from 'readline-sync';

const showDescription = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
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

export { run, showDescription };
