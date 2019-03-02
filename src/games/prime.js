import { cons } from 'hexlet-pairs';
import { generateRandomNumber, isEven } from '../utils';
import runGame from '../engine';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (typeof n !== 'number') {
    return false;
  }
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (isEven(n)) {
    return false;
  }
  const iter = (counter) => {
    if (counter === n) {
      return true;
    }
    if (n % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(3);
};

const getRightAnswer = question => (isPrime(question) ? 'yes' : 'no');

const createQuestionAnswerPair = () => {
  const question = generateRandomNumber(0, 100);
  const answer = getRightAnswer(question);
  return cons(question, answer);
};

export default () => runGame(descriptionGame, createQuestionAnswerPair);
