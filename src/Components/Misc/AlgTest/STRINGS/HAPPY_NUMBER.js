export const isHappy = () => {
  let n = 19;
  let numStr = n.toString();
  let numArr = numStr.split("");
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = sum + Math.pow(numArr[i], 2);
    if (i === numArr.length - 1) {
      numStr = sum.toString();
      numArr = numStr.split("");
      if (sum === 1 || sum === 32) {
        return true;
      }
      if ((sum & (sum - 1)) === 0) {
        return false;
      }
      sum = 0;
      i = -1;
    }
  }
};
