const generateRandomNumber = (from, to = 1) => Math.floor(Math.random() * to + from);

const isEven = number => (number % 2 === 0);

export { generateRandomNumber, isEven };
