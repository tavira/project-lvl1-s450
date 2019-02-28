import runGame from '../engine';
import {
  generateRandomNumber, isEven,
} from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const createQuestion = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  return {
    number1,
    number2,
  };
};

const gcd = (m, n) => {
  if (m === 0) {
    return n;
  }
  if (n === 0) {
    return m;
  }
  if (m === n) {
    return m;
  }
  if (isEven(m) && isEven(n)) {
    return 2 * gcd(m / 2, n / 2);
  }
  if (isEven(m) && !isEven(n)) {
    return gcd(m / 2, n);
  }
  if (!isEven(m) && isEven(n)) {
    return gcd(m, n / 2);
  }
  if (n > m) {
    return gcd((n - m) / 2, m);
  }
  return gcd((m - n) / 2, n);
};

const getRightAnswer = (numbers) => {
  const { number1, number2 } = numbers;
  return gcd(number1, number2);
};

const play = () => {
  runGame(createQuestion, getRightAnswer, descriptionGame);
};

export default play;
