// Rom to Int
export const romToInt = () => {
  const str = "IVVX";
  const RMNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const findSum = (value, prev) => {
    return RMNumberMap[prev] + value;
  };
  const sum = str.split("").reduce(findSum, 0);
  console.log(sum);
};
