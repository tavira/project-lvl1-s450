import readlineSync from 'readline-sync';

const greetUser = () => {
    const userName = askUserName();
    console.log(`Hello, ${userName}!`);
};

const askUserName = () => {
   const userName = readlineSync.question('May I have your name? ');
   return userName;
};

export { greetUser };