const rightAnswer = (a, operator, b) => {
  if (operator === '+') {
    return a + b;
  }
  return a - b;
};

export default rightAnswer;
