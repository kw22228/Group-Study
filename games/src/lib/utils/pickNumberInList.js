const pickNumberInList = (account) => {
  const result = {};
  const coins = [500, 100, 50, 10];

  coins.forEach((coin) => {
    if (coin > account) {
      result[coin] = 0;
      return;
    }

    result[coin] = Math.floor(account / coin);
    account = account % coin;
  });

  return result;
};
export default pickNumberInList;
