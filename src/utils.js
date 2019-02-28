const generateRandomNumber = (from, to = 1) => Math.floor(Math.random() * to + from);

const isEven = num => (num % 2 === 0);

export {
  generateRandomNumber, isEven,
};
