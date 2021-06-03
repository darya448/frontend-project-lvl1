const getRandomNumber = (min, max) => {
  const numRamd = Math.floor(Math.random() * (max - min)) + min;
  return numRamd;
};
export default getRandomNumber;