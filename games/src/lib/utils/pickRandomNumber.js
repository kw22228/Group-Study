const pickRandomNumber = (length) => {
  const pick = (list = []) => {
    if (list.length >= length) return list;

    const random = Math.floor(Math.random() * 9 + 1);
    if (!list.includes(random)) list.push(random);

    return pick(list);
  };

  return pick().join('');
};

export default pickRandomNumber;
