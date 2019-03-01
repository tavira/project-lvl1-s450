import { cons } from 'hexlet-pairs';
import runGame from '../engine';
import generateRandomNumber from '../utils';

const descriptionGame = 'What number is missing in the progression?';

const generateProgression = (length, startPoint, commonDifference) => {
  const iter = (counter, acc) => {
    if (counter === length - 1) {
      return acc;
    }
    const lastCurrentEl = acc[acc.length - 1];
    return iter(counter + 1, acc.concat([lastCurrentEl + commonDifference]));
  };
  return iter(0, [startPoint]);
};

const createQuestionAnswerPair = () => {
  const startPoint = generateRandomNumber(0, 10);
  const commonDifference = generateRandomNumber(0, 10);
  const progressionLength = 10;

  const progression = generateProgression(progressionLength, startPoint, commonDifference);
  const hiddenPosition = generateRandomNumber(0, 9);
  const answer = progression[hiddenPosition].toString();
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');

  return cons(question, answer);
};

export default () => runGame(descriptionGame, createQuestionAnswerPair);
