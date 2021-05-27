const randomSign = () => {
  const operators = ['+', '-'];

  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

export default randomSign;
