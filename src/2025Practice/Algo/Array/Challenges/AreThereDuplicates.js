export const areThereDuplicates = (...args) => {
  let argsFrequency = {};
  for (let value of args) {
    argsFrequency[value] = (argsFrequency[value] | 0) + 1;
  }
  console.log(argsFrequency);
  for (let key in argsFrequency) {
    const isGreaterThenTwo = argsFrequency[key];
    console.log(isGreaterThenTwo);
    if (isGreaterThenTwo > 1) return true;
  }

  return false;
};
