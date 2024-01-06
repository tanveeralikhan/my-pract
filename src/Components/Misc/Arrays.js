// Int to Roman

export const intToRoman = (num) => {
  const RM = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const INT = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let arr = [];
  for (let i = 0; i < INT.length; i++) {
    while (num >= INT[i]) {
      num -= INT[i];
      arr.push(RM[i]);
    }
  }
  arr.join("");
};

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

// MAX PROFIT
export const maxProfit2 = () => {
  const prices = [7, 1, 5, 3, 6, 4];
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
