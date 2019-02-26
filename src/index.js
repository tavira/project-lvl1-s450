import readlineSync from 'readline-sync';

const askUserName = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default () => {
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);
};
