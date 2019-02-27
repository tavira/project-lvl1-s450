import { createAnswer, checkAnswer, isEven } from '.';

const showDescription = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const createQuestion = () => {
  const maxRandomNumber = 100;
  const number1 = Math.floor(Math.random() * maxRandomNumber);
  const number2 = Math.floor(Math.random() * maxRandomNumber);

  console.log(`Question ${number1} ${number2}`);

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
  return gcd(number1, number2).toString();
};

const run = (neededAnswerCount, currentAnswerCount, name) => {
  if (neededAnswerCount === currentAnswerCount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const question = createQuestion();
  const answer = createAnswer();
  const rightAnswer = getRightAnswer(question);

  checkAnswer(answer, rightAnswer, run, neededAnswerCount, currentAnswerCount, name);
};

export { run, showDescription };
