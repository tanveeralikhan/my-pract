export const isPalindromeNumber = () => {
  let num = 121;
  let val = Number(num.toString().split("").reverse().join(""));

  return num === val;
};
