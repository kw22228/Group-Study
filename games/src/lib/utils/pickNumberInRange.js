const pickNumberInRange = (start, end) => {
  const random = Math.floor(Math.random() * (end + 1 - start) + start);
  return random;
};

export default pickNumberInRange;
