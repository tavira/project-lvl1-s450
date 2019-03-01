import { cons } from 'hexlet-pairs';
import runGame from '../engine';
import generateRandomNumber from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const gcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return gcd(n, m % n);
};

const getRightAnswer = (number1, number2) => gcd(number1, number2).toString();

const createQuestionAnswerPair = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = getRightAnswer(number1, number2);
  return cons(question, answer);
};

const play = () => {
  runGame(descriptionGame, createQuestionAnswerPair);
};

export default play;
