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
