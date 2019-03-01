import { cons } from 'hexlet-pairs';
import runGame from '../engine';
import { generateRandomNumber, isEven } from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');

const createQuestionAnswerPair = () => {
  const question = generateRandomNumber(0, 100);
  const answer = getRightAnswer(question);
  return cons(question, answer);
};

const play = () => {
  runGame(descriptionGame, createQuestionAnswerPair);
};

export default play;
