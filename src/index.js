import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default () => {
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);
};
