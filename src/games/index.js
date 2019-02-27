import readlineSync from 'readline-sync';

const createAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const checkAnswer = (
  userAnswer, rightAnswer, func, neededAnswerCount, currentAnswerCount, name,
) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    func(neededAnswerCount, currentAnswerCount + 1, name);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${name}!`);
  }
};

const isEven = num => (num % 2 === 0);

export { createAnswer, checkAnswer, isEven };
