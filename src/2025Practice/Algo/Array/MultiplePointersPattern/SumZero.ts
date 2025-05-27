export const sumZero = (arr: number[]) => {
  let left = 0,
    right = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return "no pairs exist";
};
