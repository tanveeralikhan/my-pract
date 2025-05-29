/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities: */

export const sameFrequency = (number1, number2) => {
  let firstNumber = number1.toString(),
    secondNumber = number2.toString();
  let firstNumberFrequency = {},
    secondNumberFrequency = {};

  if (firstNumber.length !== secondNumber.length) return false;

  for (let i = 0; i < firstNumber.length; i++) {
    firstNumberFrequency[firstNumber[i]] =
      (firstNumberFrequency[firstNumber[i]] | 0) + 1;
    secondNumberFrequency[secondNumber[i]] =
      (secondNumberFrequency[secondNumber[i]] | 0) + 1;
  }

  for (let key in firstNumberFrequency) {
    let valueExist = secondNumberFrequency[key];
    if (valueExist !== firstNumberFrequency[key]) return false;
  }

  return true;
};
