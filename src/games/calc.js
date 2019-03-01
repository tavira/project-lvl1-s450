import { cons } from 'hexlet-pairs';
import runGame from '../engine';
import generateRandomNumber from '../utils';

const descriptionGame = 'What is the result of the expression?';

const chooseRandomOperator = () => {
  const rnd = generateRandomNumber(0, 3);
  switch (rnd) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '';
  }
};

const getRightAnswer = (operand1, operator, operand2) => {
  let answer;
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

const createQuestionAnswerPair = () => {
  const operator = chooseRandomOperator();
  const operand1 = generateRandomNumber(0, 100);
  const operand2 = generateRandomNumber(0, 100);
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = getRightAnswer(operand1, operator, operand2);
  return cons(question, answer);
};

const play = () => {
  runGame(descriptionGame, createQuestionAnswerPair);
};

export default play;
