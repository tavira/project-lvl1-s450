import runGame from '../engine';
import {
  generateRandomNumber, isEven,
} from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const createQuestion = () => {
  const question = generateRandomNumber(0, 100);
  return {
    question,
  };
};

const getRightAnswer = (value) => {
  const { question } = value;
  return isEven(question) ? 'yes' : 'no';
};

const play = () => {
  runGame(createQuestion, getRightAnswer, descriptionGame);
};

export default play;
