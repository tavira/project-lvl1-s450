#!/usr/bin/env node

import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

console.log('Welcome to the Brain Games');
console.log();

greetUser(askUserName());
