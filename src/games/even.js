import { createAnswer, checkAnswer, isEven } from '.';

const showDescription = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const createQuestion = () => {
  const maxRandomNumber = 100;
  const question = Math.floor(Math.random() * maxRandomNumber);
  console.log(`Question: ${question}`);
  return question;
};

const run = (neededAnswerCount, currentAnswerCount, name) => {
  if (neededAnswerCount === currentAnswerCount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const question = createQuestion();
  const answer = createAnswer();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  checkAnswer(answer, rightAnswer, run, neededAnswerCount, currentAnswerCount, name);
};

export { run, showDescription };
