import readlineSync from 'readline-sync';
import { createAnswer, checkAnswer } from '.';

const showDescription = () => {
  console.log('What is the result of the expression?');
};

const chooseRandomOperator = () => {
  const rnd = Math.random();
  if (rnd < 0.33) {
    return '+';
  }
  if (rnd < 0.66) {
    return '-';
  }
  return '*';
};

const createQuestion = () => {
  const operator = chooseRandomOperator();
  const maxRandomNumber = 100;
  const operand1 = Math.floor(Math.random() * maxRandomNumber);
  const operand2 = Math.floor(Math.random() * maxRandomNumber);

  console.log(`Question: ${operand1} ${operator} ${operand2}`);

  return {
    operand1,
    operator,
    operand2,
  };
};

const getRightAnswer = (expr) => {
  let answer;
  const { operand1, operator, operand2 } = expr;
  if (operator === '+') {
    answer = operand1 + operand2;
  }
  if (operator === '-') {
    answer = operand1 - operand2;
  }
  if (operator === '*') {
    answer = operand1 * operand2;
  }
  return answer.toString();
};

const run = (neededAnswerCount, currentAnswerCount, name) => {
  if (neededAnswerCount === currentAnswerCount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const rightAnswer = getRightAnswer(createQuestion());
  const answer = createAnswer();

  checkAnswer(answer, rightAnswer, run, neededAnswerCount, currentAnswerCount, name);
};

export { run, showDescription };
