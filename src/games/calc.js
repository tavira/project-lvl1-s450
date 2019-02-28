import runGame from '../engine';
import { generateRandomNumber } from '../utils';

const descriptionGame = 'What is the result of the expression?';

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
  const operand1 = generateRandomNumber(0, 100);
  const operand2 = generateRandomNumber(0, 100);
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
  return answer;
};

const play = () => {
  runGame(createQuestion, getRightAnswer, descriptionGame);
};

export default play;
