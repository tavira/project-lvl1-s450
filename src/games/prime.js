import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';
import runGame from '../engine';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  const iter = (counter) => {
    if (counter === n) {
      return true;
    }
    if (n % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const getRightAnswer = question => (isPrime(question) ? 'yes' : 'no');

const createQuestionAnswerPair = () => {
  const question = generateRandomNumber(0, 100);
  const answer = getRightAnswer(question);
  return cons(question, answer);
};

export default () => runGame(descriptionGame, createQuestionAnswerPair);
