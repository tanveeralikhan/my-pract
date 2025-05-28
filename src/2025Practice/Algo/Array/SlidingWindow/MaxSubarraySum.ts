// Naive approach
export const maxSubArraySum = (array: number[], num: number) => {
  //[1, 2, 3, 2, 5], 3
  debugger;
  if (num > array.length) return null;
  let max = -Infinity;
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      const value = array[i + j];
      temp += value;
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

// Sliding window approach

export const maxSubArraySum2 = (array: number[], num: number) => {
  /*  let array = [2, 6, 9, 2, 1, 8, 5, 6, 3];
  let num = 3; */
  let maxSum = 0,
    tempSum = 0;
  if (num > array.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    const first = array[i - num];
    const last = array[i];
    tempSum = tempSum - first + last;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
